import { CodingIcon } from '@public/icons/coding-icon';
import { DatabaseIcon } from '@public/icons/database-icon';
import { DocumentIcon } from '@public/icons/document-icon';
import { ImgGeneratorIcon } from '@public/icons/img-icon';
import { LibraryIcon } from '@public/icons/library-icon';
import { PdfIcon } from '@public/icons/pdf-icon';
import { ResumeIcon } from '@public/icons/resume-icon';
import { SalesIcon } from '@public/icons/sales-icon';
import { SqlIcon } from '@public/icons/sql-icon';
import { StoryIcon } from '@public/icons/story-icon';

export const topMenuItems = [
  // key -> route
  {
    key: '/',
    path: '/library',
    icon: <LibraryIcon />,
    label: 'Library',
  },
];

export const myAppMenuItems = [
  // key -> route
  {
    key: 'my-app',
    title: 'MY APP',
  },
  {
    key: '/pdf-reader',
    icon: <PdfIcon />,
    label: 'PDF Reader',
  },
  {
    key: '/database-analysis',
    icon: <DatabaseIcon />,
    label: 'Database Analysis',
  },
  {
    key: '/sql-optimizer',
    icon: <SqlIcon />,
    label: 'SQL Optimizer',
  },
  {
    key: 'divider',
    divider: true,
  },
];

export const otherAppMenuItems = [
  // key -> route
  {
    key: 'other-app',
    title: 'Other App',
  },
  {
    key: '/image-generator',
    icon: <ImgGeneratorIcon />,
    label: 'Image Generator',
  },
  {
    key: '/coding',
    icon: <CodingIcon />,
    label: 'Coding',
  },
  {
    key: '/resume-analyzer',
    icon: <ResumeIcon />,
    label: 'Resume Analyzer',
  },
  {
    key: '/project-document',
    icon: <DocumentIcon />,
    label: 'Project Document',
  },
  {
    key: '/sales',
    icon: <SalesIcon />,
    label: 'Sales',
  },
  {
    key: '/user-stories',
    icon: <StoryIcon />,
    label: 'User Stories',
  },
];
