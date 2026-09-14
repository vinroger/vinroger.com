'use client';

import { createContext, useContext, useRef, useState } from 'react';
import type { ImgHTMLAttributes, PointerEvent, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Maximize, Minus, Plus, X } from 'lucide-react';

type Picture = { src: string; alt: string };
type PreviewContext = { open: (picture: Picture, trigger: HTMLButtonElement) => void };
const ImagePreviewContext = createContext<PreviewContext | null>(null);

export function ImagePreviewProvider({ children }: { children: ReactNode }) {
  const [picture, setPicture] = useState<Picture | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const close = useRef<HTMLButtonElement>(null);
  const drag = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null);

  function open(next: Picture, button: HTMLButtonElement) {
    trigger.current = button;
    setScale(1);
    setOffset({ x: 0, y: 0 });
    setPicture(next);
  }

  function zoom(next: number) {
    setScale(Math.min(6, Math.max(1, next)));
    setOffset({ x: 0, y: 0 });
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (scale === 1 || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, y: event.clientY, startX: offset.x, startY: offset.y };
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current || !stage.current || !image.current) return;
    // Keep an edge of the enlarged image from being dragged past the viewing area.
    const limitX = Math.max(0, (image.current.offsetWidth * scale - stage.current.clientWidth) / 2);
    const limitY = Math.max(0, (image.current.offsetHeight * scale - stage.current.clientHeight) / 2);
    const x = drag.current.startX + event.clientX - drag.current.x;
    const y = drag.current.startY + event.clientY - drag.current.y;
    setOffset({ x: Math.max(-limitX, Math.min(limitX, x)), y: Math.max(-limitY, Math.min(limitY, y)) });
  }

  function endDrag() { drag.current = null; setDragging(false); }

  return <ImagePreviewContext.Provider value={{ open }}>
    {children}
    <Dialog.Root open={picture !== null} onOpenChange={value => { if (!value) { setPicture(null); endDrag(); } }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm" />
        <Dialog.Content aria-describedby="image-preview-help" className="image-preview-dialog"
          onOpenAutoFocus={event => { event.preventDefault(); close.current?.focus(); }}
          onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}
          onKeyDown={event => {
            if (event.key === '+' || event.key === '=') { event.preventDefault(); zoom(scale + .5); }
            if (event.key === '-') { event.preventDefault(); zoom(scale - .5); }
            if (event.key === '0') { event.preventDefault(); zoom(1); }
          }}>
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
            <Dialog.Title className="text-sm font-medium">Image preview</Dialog.Title>
            <div className="flex items-center gap-1">
              <button type="button" aria-label="Zoom out" title="Zoom out" disabled={scale === 1} onClick={() => zoom(scale - .5)} className="preview-control"><Minus size={18} /></button>
              <output className="w-12 text-center text-xs tabular-nums" aria-live="polite">{scale === 1 ? 'Fit' : `${Math.round(scale * 100)}%`}</output>
              <button type="button" aria-label="Zoom in" title="Zoom in" disabled={scale === 6} onClick={() => zoom(scale + .5)} className="preview-control"><Plus size={18} /></button>
              <button type="button" aria-label="Fit image" title="Fit image" onClick={() => zoom(1)} className="preview-control"><Maximize size={17} /></button>
              <Dialog.Close asChild><button ref={close} type="button" aria-label="Close image preview" title="Close" className="preview-control ml-2"><X size={20} /></button></Dialog.Close>
            </div>
          </header>
          <div ref={stage} className="image-preview-stage" style={{ cursor: scale === 1 ? 'zoom-in' : dragging ? 'grabbing' : 'grab' }}
            onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag}
            onDoubleClick={() => zoom(scale === 1 ? 2 : 1)}>
            {picture && <img ref={image} src={picture.src} alt={picture.alt} draggable={false}
              style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }} />}
          </div>
          <footer className="border-t border-border px-4 py-3">
            <p className="line-clamp-2 text-sm">{picture?.alt}</p>
            <Dialog.Description id="image-preview-help" className="mt-1 text-xs text-muted-foreground">Zoom in, then drag to move. Press Escape to close.</Dialog.Description>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </ImagePreviewContext.Provider>;
}

export function PreviewImage({ src, alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const preview = useContext(ImagePreviewContext);
  return <button type="button" className="image-preview-trigger" aria-label={`Preview image: ${alt || 'Project image'}`}
    onClick={event => { if (src) preview?.open({ src, alt }, event.currentTarget); }}>
    <img {...props} src={src} alt={alt} />
  </button>;
}
