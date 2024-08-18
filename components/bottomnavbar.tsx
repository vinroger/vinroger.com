'use client';

import React, { useRef, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navItems } from './navItems';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function BottomNavbar() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft + 50 < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className="relative">
      <nav
        ref={navRef}
        className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg h-20 flex items-center justify-start max-w-full overflow-scroll border-t-[1px] overflow-x-auto p-2 border-neutral-200 scrollbar-hide"
        onScroll={checkScroll}
      >
        {navItems.map((item) => {
          const itemKey = item.overrideKey || item.name.toLowerCase();
          const isActive = pathname?.split('/')[1] === itemKey;

          return (
            <div key={item.name} className="flex-shrink-0 h-full mr-1">
              <Link
                href={`/${itemKey}`}
                className={`flex flex-col items-center justify-center h-full p-3 min-w-24 transition-all ${
                  isActive
                    ? 'text-neutral-600 font-bold shadow-md border border-neutral-200 rounded-full'
                    : 'text-neutral-600 hover:bg-gray-100 rounded-full'
                }`}
              >
                <item.IconElement
                  strokeWidth={cn(isActive ? '2px' : '1.5px')}
                />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            </div>
          );
        })}
      </nav>
      {showLeftScroll && (
        <div className="absolute left-0 top-0 mt-1 bottom-0 bg-gradient-to-r from-white via-white to-transparent w-12 flex items-center justify-start pointer-events-none">
          <ChevronLeft className="text-neutral-400" />
        </div>
      )}
      {showRightScroll && (
        <div className="absolute right-0 top-0 mt-1 bottom-0 bg-gradient-to-l from-white via-white to-transparent w-12  flex items-center justify-end pointer-events-none">
          <ChevronRight className="text-neutral-400" />
        </div>
      )}
    </div>
  );
}

export default BottomNavbar;
