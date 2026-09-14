import {
  Telescope,
  FolderGit2,
  GraduationCap,
  BriefcaseBusiness,
  BookOpenText,
  Mail,
  Twitter,
  Linkedin,
  Youtube,
  X,
  Github,
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
    hotkey: 'E',
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

export const navSections = [
  {
    name: 'ABOUT ME',
    items: [
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
        hotkey: 'E',
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
    ],
  },
  {
    name: 'SOCIAL',
    items: [
      {
        name: 'Email',
        icon: <Mail strokeWidth="1.5px" />,
        IconElement: Mail,
        // hotkey: 'M',
        overrideKey: 'message',
        iconClassname: 'mr-2 w-5',
        externalLink:
          'mailto:vincentiusrogerk@gmail.com',
      },
      {
        name: 'Twitter',
        icon: <Twitter strokeWidth="1.5px" />,
        IconElement: Twitter,
        // hotkey: '',
        iconClassname: 'mr-2 w-5',
        externalLink: 'https://x.com/vinroger2',
      },
      {
        name: 'LinkedIn',
        icon: <Linkedin strokeWidth="1.5px" />,
        IconElement: Linkedin,
        // hotkey: '',
        iconClassname: 'mr-2 w-5',
        externalLink: 'https://www.linkedin.com/in/vincentius-roger/',
      },
      {
        name: 'GitHub',
        icon: <Github strokeWidth="1.5px" />,
        IconElement: Github,
        // hotkey: '',
        iconClassname: 'mr-2 w-5',
        externalLink: 'https://github.com/vinroger',
      },

      // {
      //   name: 'YouTube',
      //   icon: <Youtube strokeWidth="1.5px" />,
      //   IconElement: Youtube,
      //   hotkey: '',
      //   iconClassname: 'mr-2 w-5',
      //   externalLink: true,
      // },
    ],
  },

];
