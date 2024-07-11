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
  Telescope,
  FolderGit2,
  GraduationCap,
  BriefcaseBusiness,
  BookOpenText,
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
    !!pathname && pathname.split('/')[1] === itemKey.toLowerCase();

  return (
    <NavigationMenuLink
      className={cn(
        navigationMenuTriggerStyle(),
        'w-full justify-start items-center cursor-pointer font-medium bg-transparent text-neutral-400 text-sm mb-0.5 p-3',
        isActive &&
          'text-black border-neutral-300 border-[0.5px] shadow-sm font-semibold'
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
            isActive && ' text-[14.5px]'
          )}
        >
          {icon}
          <p className="ml-2">{toTitleCase(itemName)}</p>
        </div>
      }
      onClick={() => {
        router.push(`/${itemName.toLowerCase()}`);
      }}
      itemKey={itemName.toLowerCase()}
    />
  );
}

const navItems = [
  {
    name: 'Explore',
    icon: <Telescope strokeWidth="1.5px" className={'mr-2 w-5 '} />,
  },
  {
    name: 'Education',
    icon: <GraduationCap strokeWidth="1.5px" className={'mr-2 w-5 '} />,
  },
  {
    name: 'Experience',
    icon: <BriefcaseBusiness strokeWidth="1.5px" className={'mr-2 w-5 '} />,
  },
  {
    name: 'Projects',
    icon: <FolderGit2 strokeWidth="1.5px" className={'mr-2 w-5 '} />,
  },
  {
    name: 'Blog',
    icon: <BookOpenText strokeWidth="1.5px" className={'mr-2 w-5 '} />,
  },
];

export function Navbar() {
  const userButtonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col border-neutral-200 border-e-[1px] min-h-full justify-start bg-neutral-50 p-4">
      <a
        className="flex flex-row items-center cursor-pointer hover:opacity-50 mb-10 p-2"
        href={'/workspace'}
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
      <NavigationMenu className="flex-col items-start justify-between flex-1 w-full max-w-full mt-3 max-h-fit">
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

        {/* <div className="flex flex-col max-w-full w-full justify-center items-center">
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
        </div> */}
      </NavigationMenu>
    </div>
  );
}
