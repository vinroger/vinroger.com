/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';
import { useRouter, usePathname } from 'next/navigation';
import {
  Boxes,
  Database,
  AreaChart,
  MonitorDown,
  FlaskConical,
  MessageSquareMore,
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef } from 'react';
import { Separator } from './ui/separator';
import { ellipsisString, toTitleCase } from '@/utils/functions/string';

function NavItem({
  item,
  onClick,
  itemKey,
}: {
  item: React.ReactNode;
  onClick: () => void;
  itemKey: string;
}) {
  const pathname = usePathname();

  const isActive =
    !!pathname && pathname.split('/')[2] === itemKey.toLowerCase();

  return (
    <NavigationMenuLink
      className={cn(
        navigationMenuTriggerStyle(),
        'w-full justify-start items-center cursor-pointer font-normal'
      )}
      onClick={onClick}
      active={isActive}
    >
      {item}
    </NavigationMenuLink>
  );
}

function NavItemRenderer({
  itemName,
  itemKey,
  icon,
}: {
  itemKey: string;
  itemName: string;
  icon: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive =
    !!pathname && pathname.split('/')[1] === itemKey.toLowerCase();

  return (
    <NavItem
      item={
        <div
          className={cn(
            'flex flex-row items-center',
            isActive && 'font-bold text-[14.5px]'
          )}
        >
          {icon}
          {toTitleCase(itemName)}
        </div>
      }
      onClick={() => {
        router.push(`/${123}/${itemName.toLowerCase()}`);
      }}
      itemKey={itemName.toLowerCase()}
    />
  );
}

const navItems = [
  {
    name: 'knowledge-base',
    icon: <Database strokeWidth="2.8px" className={'mr-2 w-3.5 '} />,
  },
  {
    name: 'experiment',
    icon: <FlaskConical className={'mr-2 w-3.5 '} />,
  },
];

export function Navbar() {
  const userButtonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col border-neutral-300 border-e-[1px] min-h-full justify-start">
      <a
        className="flex flex-row items-center p-5 ml-2 space-x-3 text-xl font-bold cursor-pointer hover:opacity-50"
        href={'/workspace'}
      >
        <p>Singtel POC</p>
      </a>
      <p className="mt-4 ml-4 text-sm font-semibold text-neutral-500">
        {ellipsisString('Test Project', 20).toUpperCase()}
      </p>
      <NavigationMenu className="flex-col items-start justify-between flex-1 w-full max-w-full px-3 mt-3 max-h-fit">
        <div className="flex flex-col w-full list-none">
          {navItems.map((item) => (
            <NavItemRenderer
              key={item.name}
              itemKey={item.name}
              itemName={item.name}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="flex flex-col max-w-full w-full justify-center items-center">
          <div className="flex flex-row items-center w-full space-x-2 min-h-[60px]">
            <div
              className="flex flex-col max-w-full overflow-scroll cursor-pointer hover:opacity-50 "
              onClick={() => {
                (
                  document.querySelector('.cl-userButtonTrigger') as any
                )?.click();
              }}
            >
              <p className="overflow-scroll text-sm font-semibold text-wrap">
                {ellipsisString('Your Name' ?? '', 20)}
              </p>
            </div>
          </div>
        </div>
      </NavigationMenu>
    </div>
  );
}
