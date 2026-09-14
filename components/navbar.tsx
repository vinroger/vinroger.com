'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { navSections } from './navItems';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  return <aside className={cn('sticky top-0 flex h-dvh shrink-0 flex-col overflow-y-auto border-r border-neutral-200 bg-neutral-50 p-3', collapsed ? 'w-20' : 'w-[250px]')}>
    <Link href="/explore" className="my-4 flex items-center gap-3 rounded-lg p-2" aria-label="Roger, home">
      <img src="/personalphoto.jpeg" alt="Roger" className="h-10 w-10 shrink-0 rounded-full object-cover" />
      {!collapsed && <div><p className="text-sm font-semibold">Vincentius Roger</p><p className="text-xs text-neutral-500">Software Engineer</p></div>}
    </Link>
    <button type="button" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!collapsed} className="mb-6 flex items-center justify-center rounded-lg border border-neutral-200 p-2 text-neutral-500 hover:bg-white">
      {collapsed ? <PanelLeftOpen size={18} /> : <><PanelLeftClose size={18} /><span className="ml-2 text-xs">Collapse sidebar</span></>}
    </button>
    <nav aria-label="Main navigation" className="space-y-8">{navSections.filter(Boolean).map(section => <div key={section.name}>
      {!collapsed && <p className="mb-2 px-3 text-xs font-medium tracking-wide text-neutral-500">{section.name}</p>}
      <div className="space-y-1">{section.items.map(item => {
        const external = 'externalLink' in item ? item.externalLink : undefined;
        const key = item.overrideKey ?? item.name.toLowerCase();
        const href = external || `/${key}`;
        const active = !external && pathname.split('/')[1] === key;
        return <Link key={item.name} href={href} title={collapsed ? item.name : undefined} aria-label={item.name} aria-current={active ? 'page' : undefined} target={external && !external.startsWith('mailto:') ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cn('flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-neutral-600 hover:bg-neutral-100', active && 'bg-white text-neutral-950 ring-1 ring-neutral-200', collapsed && 'justify-center px-2')}>
          <item.IconElement className="h-5 w-5 shrink-0" strokeWidth={1.5} />{!collapsed && <span>{item.name}</span>}
        </Link>;
      })}</div>
    </div>)}</nav>
  </aside>;
}
