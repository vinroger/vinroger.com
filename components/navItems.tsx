import {
  Telescope,
  FolderGit2,
  GraduationCap,
  BriefcaseBusiness,
  BookOpenText,
} from 'lucide-react';
export const navItems = [
  {
    name: 'Explore',
    icon: <Telescope strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    IconElement: Telescope,
    hotkey: 'W',
    iconClassname: 'mr-2 w-5 ',
  },
  {
    name: 'Education',
    icon: <GraduationCap strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    IconElement: GraduationCap,
    hotkey: 'A',
    iconClassname: 'mr-2 w-5 ',
  },
  {
    name: 'Work Experience',
    icon: <BriefcaseBusiness strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    IconElement: BriefcaseBusiness,
    hotkey: 'S',
    overrideKey: 'experience',
    iconClassname: 'mr-2 w-5 ',
  },
  {
    name: 'Projects',
    icon: <FolderGit2 strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    IconElement: FolderGit2,
    hotkey: 'D',
    iconClassname: 'mr-2 w-5 ',
  },
  {
    name: 'Blog',
    icon: <BookOpenText strokeWidth="1.5px" className={'mr-2 w-5 '} />,
    IconElement: BookOpenText,
    hotkey: 'R',
    iconClassname: 'mr-2 w-5 ',
  },
];
