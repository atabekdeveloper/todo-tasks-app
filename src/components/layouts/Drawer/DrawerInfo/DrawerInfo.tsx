/* eslint-disable react/jsx-one-expression-per-line */
import { Avatar, Drawer } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserAlt } from 'react-icons/fa';
import { useActions, useResponsive, useSelectors } from 'src/hooks';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import { DrawerInfoSwitch } from './DrawerInfoSwitch/DrawerInfoSwitch';

import './drawer-info.scss';

const DrawerInfo: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);

  const { data } = useGetTasksQuery(null);

  const allTasks = data ? data.length : 1;
  const completedTask = data ? data.filter((el) => el.completed).length : 1;

  const percentageAllTasks = (completedTask * 100) / allTasks;

  const { mode, drawerShowInfo } = useSelectors();
  const { toggleDrawerInfo } = useActions();
  const { isMobile } = useResponsive(1200);

  const { t } = useTranslation();

  const onCloseDrawer = () => toggleDrawerInfo();

  React.useEffect(() => {
    if (isMobile) setIsDrawer(!drawerShowInfo);
    else setIsDrawer(drawerShowInfo);
  }, [drawerShowInfo, isMobile]);

  return (
    <Drawer
      placement="right"
      width={200}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={240}
      open={isDrawer}
      mask={isMobile}
    >
      <div className={clsx('drawer-info', `drawer-info ${mode}`)}>
        <div className="drawer-info__top">
          <div className="drawer-info__user">
            <h3>{t('userTitle')}</h3>
            <Avatar size={35} icon={<FaUserAlt />} />
          </div>
          <div className="drawer-info__mode">
            <h3>{t('darkmode')}</h3>
            <DrawerInfoSwitch />
          </div>
          <div className="drawer-info__status">
            <div className="drawer-info__status-info">
              <span>{t('all')}</span>
              <span>{`${completedTask}/${allTasks}`}</span>
            </div>
            <div className="drawer-info__status-slider">
              <div style={{ width: `${percentageAllTasks}%` }} />
            </div>
          </div>
        </div>
        <div className="drawer-info__bottom">
          <a href="https://github.com/kiyotaaka" target="_blank" rel="noreferrer">
            {t('author')}
          </a>
        </div>
      </div>
    </Drawer>
  );
};
export { DrawerInfo };
