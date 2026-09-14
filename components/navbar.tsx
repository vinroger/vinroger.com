'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ArrowUpRight, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { toTitleCase } from '@/utils/functions/string';
import { navItems, navSections } from './navItems';
import { ThemeToggle } from './theme-toggle';

const pages = navItems.map(item => ({
  href: `/${item.overrideKey ?? item.name.toLowerCase()}`,
  key: item.hotkey.toLowerCase(),
}));

export function Navbar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      // Typing and image-preview controls should not trigger page navigation.
      const target = event.target instanceof Element ? event.target : null;
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey ||
          target?.closest('input, textarea, select, [contenteditable="true"], [role="dialog"]')) return;
      const page = pages.find(page => page.key === event.key.toLowerCase());
      if (page) { event.preventDefault(); router.push(page.href); }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router]);

  useEffect(() => {
    let idle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const prefetchPages = () => pages.forEach(page => router.prefetch(page.href));
    function schedule() {
      // Reuse Next's route cache after the first page finishes loading.
      if ('requestIdleCallback' in window) idle = window.requestIdleCallback(prefetchPages, { timeout: 2000 });
      else timer = setTimeout(prefetchPages, 1000);
    }
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
    return () => {
      window.removeEventListener('load', schedule);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [router]);

  return <div className={cn('flex h-full flex-col overflow-x-hidden overflow-y-auto border-r border-border bg-neutral-50', collapsed ? 'p-2' : 'p-4')}>
    <div className={cn('mb-10', collapsed ? 'flex flex-col items-center gap-3' : 'relative')}>
      <Link href="/explore" className="flex items-center p-2 hover:opacity-70" aria-label="Vincentius Roger, home">
        <img src="/personalphoto.jpeg" className={cn('h-10 w-10 shrink-0 rounded-full', !collapsed && 'mr-2')} alt="" />
        {!collapsed && <div className="flex min-w-0 flex-col"><p className="text-sm font-semibold">Vincentius Roger</p><p className="text-xs text-neutral-500">Software Engineer</p></div>}
      </Link>
      <button type="button" onClick={onToggle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!collapsed}
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className={cn('flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground', !collapsed && 'absolute -right-2 -top-2')}>
        {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
      </button>
    </div>
    <NavigationMenu className="mt-3 flex w-full max-w-full flex-1 flex-col items-start justify-start">
      {navSections.map(section => <div key={section.name} className="mb-6 w-full">
        {!collapsed && <h3 className="mb-2 text-xs font-semibold text-neutral-500">{section.name}</h3>}
        <div className="flex w-full list-none flex-col">
          {section.items.map(item => {
            const external = 'externalLink' in item ? item.externalLink : undefined;
            const href = external || `/${item.overrideKey ?? item.name.toLowerCase()}`;
            const hotkey = 'hotkey' in item ? item.hotkey : undefined;
            const active = !external && pathname.split('/')[1] === href.slice(1);
            return <NavigationMenuLink key={item.name} asChild active={active}>
              <Link href={href} prefetch={false} onMouseEnter={() => { if (!external) router.prefetch(href); }}
                target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                aria-label={item.name} aria-current={active ? 'page' : undefined}
                title={collapsed ? `${item.name}${hotkey ? ` (${hotkey})` : ''}` : undefined}
                className={cn(navigationMenuTriggerStyle(), 'group relative mb-1 w-full cursor-pointer items-center bg-transparent text-sm font-medium text-neutral-400',
                  collapsed ? 'justify-center px-2' : 'justify-start p-3', active && 'border border-neutral-300 text-black shadow-sm font-semibold')}>
                <item.IconElement size={20} strokeWidth={1.5} className={cn('shrink-0', !collapsed && 'mr-4')} />
                {!collapsed && <span>{toTitleCase(item.name)}</span>}
                {hotkey && !collapsed && <span className="ml-auto flex w-6 justify-center rounded-sm border border-neutral-300 px-1.5 py-1 text-xs text-neutral-500">{hotkey}</span>}
                {external && <ArrowUpRight aria-hidden="true" className={cn('h-4 w-4 shrink-0 text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100', collapsed ? 'absolute right-0 top-0 h-3 w-3' : 'ml-auto')} />}
              </Link>
            </NavigationMenuLink>;
          })}
        </div>
      </div>)}
    </NavigationMenu>
    <div className="mt-3 border-t border-border pt-3"><ThemeToggle compact={collapsed} /></div>
  </div>;
}
