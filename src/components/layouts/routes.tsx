/* eslint-disable react-hooks/rules-of-hooks */
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { BsFillClipboardCheckFill, BsUiRadiosGrid } from 'react-icons/bs';
import { MdOutlineNotificationImportant, MdToday } from 'react-icons/md';
import { TbNotesOff } from 'react-icons/tb';

type TRoute = {
  key: string;
  label: string;
  icon: JSX.Element;
};

export const getRoutes = () => {
  const { t } = useTranslation();
  const routes: TRoute[] = [
    {
      key: '/',
      label: t('all'),
      icon: <BsUiRadiosGrid />,
    },
    {
      key: '/today',
      label: t('today'),
      icon: <MdToday />,
    },
    {
      key: '/important',
      label: t('important'),
      icon: <MdOutlineNotificationImportant />,
    },
    {
      key: '/completed',
      label: t('completed'),
      icon: <BsFillClipboardCheckFill />,
    },
    {
      key: '/uncompleted',
      label: t('uncompleted'),
      icon: <TbNotesOff />,
    },
    // {
    //   key: '/directories',
    //   label: t('directories'),
    //   icon: <ImFolderOpen />,
    //   children: [
    //     { label: t('mainDirectories'), key: '/directories/main' },
    //     {
    //       label: t('newDirectories'),
    //       key: '/directories/new',
    //       icon: <AiOutlinePlus />,
    //       style: {
    //         border: '1px dashed',
    //       },
    //     },
    //   ],
    // },
  ];
  return routes;
};
