/* eslint-disable react/jsx-one-expression-per-line */
import { Drawer } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UiButton } from 'src/components/ui';
import { useActions, useResponsive, useSelectors } from 'src/hooks';

import { DrawerRouteMenu } from './DrawerRouteMenu/DrawerRouteMenu';

import './drawer-route.scss';

const DrawerRoute: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);

  const { mode, drawerShowRoute } = useSelectors();

  const { isMobile } = useResponsive(1200);
  const { toggleDrawerRoute, toggleModal } = useActions();
  const { t } = useTranslation();

  const onCloseDrawer = () => toggleDrawerRoute();

  React.useEffect(() => {
    if (isMobile) setIsDrawer(!drawerShowRoute);
    else setIsDrawer(drawerShowRoute);
  }, [drawerShowRoute, isMobile]);

  return (
    <Drawer
      placement="left"
      width={256}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={240}
      open={isDrawer}
      mask={isMobile}
    >
      <div className={clsx('drawer-route', `drawer-route ${mode}`)}>
        <div className="drawer-route__submenu">
          <h2>{t('title')}</h2>
          <UiButton onClick={() => toggleModal()}>{t('addText')}</UiButton>
        </div>
        <div className="drawer-route__menu">
          <DrawerRouteMenu />
        </div>
      </div>
    </Drawer>
  );
};
export { DrawerRoute };
