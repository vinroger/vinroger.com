'use client';
import { useRouter, usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { toTitleCase } from '@/utils/functions/string';
import { navItems, navSections } from './navItems';

function NavItem({
  item,
  onClick,
  itemKey,
  itemHotkey,
  overrideKey,
  externalLink,
}: {
  item: React.ReactNode;
  onClick: () => void;
  itemKey: string;
  itemHotkey: string;
  overrideKey?: string;
  externalLink?: boolean;
}) {
  const pathname = usePathname();

  const isActive =
    !externalLink &&
    !!pathname &&
    (pathname.split('/')[1] === itemKey.toLowerCase() ||
      pathname.split('/')[1] === (overrideKey ?? itemKey).toLowerCase());

  return (
    <NavigationMenuLink
      className={cn(
        navigationMenuTriggerStyle(),
        'w-full justify-start items-center cursor-pointer font-medium bg-transparent text-neutral-400 text-sm mb-1 p-3',
        isActive &&
          'text-black border-neutral-300 border-[0.5px] shadow-sm font-semibold'
      )}
      onClick={onClick}
      active={isActive}
    >
      {item}
      {itemHotkey && (
        <span className="ml-auto text-xs text-neutral-500 border-[1px] p-1 rounded-sm px-1.5 shadow-xs w-6 flex justify-center">
          {itemHotkey}
        </span>
      )}
      {externalLink && (
        <span className="ml-auto text-xs text-neutral-500">↗</span>
      )}
    </NavigationMenuLink>
  );
}

function NavItemRenderer({
  itemName,
  itemKey,
  itemHotkey,
  icon,
  iconClassname,
  overrideKey,
  externalLink,
}: {
  itemKey: string;
  itemName: string;
  itemHotkey: string;
  icon: React.ReactNode;
  iconClassname: string;
  overrideKey?: string;
  externalLink?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive =
    !!pathname && pathname.split('/')[1] === itemKey.toLowerCase();

  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    } else {
      router.push(`/${(overrideKey ?? itemName).toLowerCase()}`);
    }
  };

  return (
    <NavItem
      item={
        <div
          className={cn(
            'flex flex-row items-center',
            isActive && ' text-[14.5px]'
          )}
        >
          <div className={iconClassname}>{icon}</div>
          <p className="ml-2">{toTitleCase(itemName)}</p>
        </div>
      }
      onClick={handleClick}
      itemKey={itemName.toLowerCase()}
      itemHotkey={itemHotkey}
      overrideKey={overrideKey}
      externalLink={externalLink as any}
    />
  );
}

export function Navbar() {
  const userButtonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (event: KeyboardEvent) => {
    const pressedKey = event.key.toLowerCase();
    navSections.forEach((section: any) => {
      const matchingNavItem = section.items.find(
        (item: any) => item?.hotkey?.toLowerCase() === pressedKey.toLowerCase()
      );
      if (matchingNavItem) {
        const toUse = matchingNavItem.overrideKey ?? matchingNavItem.name;
        router.push(`/${toUse.toLowerCase()}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex flex-col border-neutral-200 border-e-[1px] min-h-full justify-start bg-neutral-50 p-4">
      <a
        className="flex flex-row items-center cursor-pointer hover:opacity-50 mb-10 p-2"
        href={'/explore'}
      >
        <img
          src="/personalphoto.jpeg"
          className="w-10 rounded-full mr-2"
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold ">Vincentius Roger</p>
          <p className="text-neutral-500 text-xs">Full-stack & GenAI Dev</p>
        </div>
      </a>
      <NavigationMenu className="flex-col items-start justify-start flex-1 w-full max-w-full mt-3 max-h-fit">
        {navSections.map((section: any) => (
          <div key={section.name} className="w-full mb-6">
            <h3 className="text-xs font-semibold text-neutral-500 mb-2">
              {section.name}
            </h3>
            <div className="flex flex-col w-full list-none">
              {section.items.map((item: any) => (
                <NavItemRenderer
                  key={item.name}
                  itemHotkey={item.hotkey}
                  itemKey={item.name}
                  itemName={item.name}
                  icon={item.icon}
                  iconClassname={item.iconClassname}
                  overrideKey={item.overrideKey}
                  externalLink={item.externalLink}
                />
              ))}
            </div>
          </div>
        ))}
      </NavigationMenu>
    </div>
  );
}
