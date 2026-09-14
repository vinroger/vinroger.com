'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from './navItems';

export default function BottomNavbar() {
  const pathname = usePathname();
  return <nav aria-label="Mobile navigation" className="grid grid-cols-5 border-t border-neutral-200 bg-white px-1 pb-[max(8px,env(safe-area-inset-bottom))] pt-2">
    {navItems.map(item => {
      const route = item.overrideKey ?? item.name.toLowerCase();
      const active = pathname.split('/')[1] === route;
      return <Link key={item.name} href={`/${route}`} aria-current={active ? 'page' : undefined} className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg px-1 text-[10px] ${active ? 'bg-neutral-100 font-semibold text-neutral-950' : 'text-neutral-500'}`}><item.IconElement size={20} strokeWidth={1.5} /><span>{item.name === 'Work Experience' ? 'Experience' : item.name}</span></Link>;
    })}
  </nav>;
}
