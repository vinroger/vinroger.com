'use client';
import { useRouter, usePathname } from 'next/navigation';
import {
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
import { useEffect, useRef } from 'react';
import { toTitleCase } from '@/utils/functions/string';

function NavItem({
  item,
  onClick,
  itemKey,
  itemHotkey,
}: {
  item: React.ReactNode;
  onClick: () => void;
  itemKey: string;
  itemHotkey: string;
}) {
  const pathname = usePathname();

  const isActive =
    !!pathname && pathname.split('/')[1] === itemKey.toLowerCase();

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
      <span className="ml-auto text-xs text-neutral-500 border-[1px] p-1 rounded-sm px-1.5 shadow-xs w-6 flex justify-center">
        {itemHotkey}
      </span>
    </NavigationMenuLink>
  );
}

function NavItemRenderer({
  itemName,
  itemKey,
  itemHotkey,
  icon,
}: {
  itemKey: string;
  itemName: string;
  itemHotkey: string;
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
      itemHotkey={itemHotkey}
    />
  );
}

const navItems = [
  {
    name: 'Explore',
    icon: <Telescope strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    hotkey: 'W',
  },
  {
    name: 'Education',
    icon: <GraduationCap strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    hotkey: 'A',
  },
  {
    name: 'Experience',
    icon: <BriefcaseBusiness strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    hotkey: 'S',
  },
  {
    name: 'Projects',
    icon: <FolderGit2 strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    hotkey: 'D',
  },
  {
    name: 'Blog',
    icon: <BookOpenText strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    hotkey: 'R',
  },
];

export function Navbar() {
  const userButtonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (event: KeyboardEvent) => {
    const pressedKey = event.key.toLowerCase();
    // console.log(pressedKey, navIt);
    const matchingNavItem = navItems.find(
      (item) => item.hotkey.toLowerCase() === pressedKey.toLowerCase()
    );
    if (matchingNavItem) {
      router.push(`/${matchingNavItem.name.toLowerCase()}`);
    }
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
      <NavigationMenu className="flex-col items-start justify-between flex-1 w-full max-w-full mt-3 max-h-fit">
        <div className="flex flex-col w-full list-none">
          {navItems.map((item) => (
            <NavItemRenderer
              key={item.name}
              itemHotkey={item.hotkey}
              itemKey={item.name}
              itemName={item.name}
              icon={item.icon}
            />
          ))}
        </div>
      </NavigationMenu>
    </div>
  );
}
