'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';
import BottomNavbar from './bottomnavbar';
import { Navbar } from './navbar';
import { ThemeToggle } from './theme-toggle';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const content = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => setCollapsed(localStorage.getItem('portfolio-sidebar-collapsed') === 'true'), []);
  useEffect(() => {
    content.current?.scrollTo({ top: 0 });
  }, [pathname]);

  function toggleSidebar() {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem('portfolio-sidebar-collapsed', String(next));
  }

  return <div className="flex h-dvh w-full overflow-hidden bg-background">
    <aside className={`hidden h-full shrink-0 lg:block ${collapsed ? 'w-[76px]' : 'w-[250px]'}`}>
      <Navbar collapsed={collapsed} onToggle={toggleSidebar} />
    </aside>
    <div className="fixed bottom-0 left-0 right-0 z-10 lg:hidden"><BottomNavbar /></div>
    <div className="fixed right-4 top-3 z-10 rounded-md bg-background lg:hidden"><ThemeToggle compact /></div>
    <Toaster />
    {/* Only the vertical axis scrolls. overflow-scroll also reserved a bottom track. */}
    <main ref={content} className="site-content min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto">{children}</main>
  </div>;
}
