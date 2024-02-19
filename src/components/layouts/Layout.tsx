import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdAdd } from 'react-icons/io';
import { Outlet, useLocation } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { useActions, useLabel, useResponsive, useSelectors } from 'src/hooks';

import { TaskForm } from '../shared';
import { UiFloatButton } from '../ui';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { DrawerInfo, DrawerRoute } from './Drawer';
import { Head } from './Head';

import './Layout.scss';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { drawerShowRoute, drawerShowInfo } = useSelectors();
  const { setLabel, toggleModal } = useActions();
  const label = useLabel(pathname);
  const { isMobile } = useResponsive(1200);
  React.useEffect(() => {
    if (label) setLabel(label);
    else setLabel('/');
  }, [label, setLabel]);
  return (
    <div className="layout">
      <DrawerRoute />
      <DrawerInfo />
      <main
        className={clsx(
          'main',
          !drawerShowRoute && 'main activeRoute',
          !drawerShowInfo && 'main activeInfo',
        )}
      >
        <Header />
        <Head />
        <TaskForm />
        <Outlet />
        <Footer />
      </main>
      {isMobile && (
        <UiFloatButton onClick={() => toggleModal()} icon={<IoMdAdd />} tooltip={t('addText')} />
      )}
    </div>
  );
};

export { Layout };
