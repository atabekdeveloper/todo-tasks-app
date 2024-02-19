import { Skeleton } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFilterTasks, useSelectors } from 'src/hooks';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import './head.scss';

const Head: React.FC = () => {
  const { data, isLoading } = useGetTasksQuery(null);
  const { t } = useTranslation();

  const filterTasks = useFilterTasks({ data });
  const { menuLabel } = useSelectors();
  if (menuLabel === '/') return null;
  if (isLoading) return <Skeleton.Input size="small" style={{ width: '300px' }} active />;
  return (
    <h2 className="head">
      {`${menuLabel} (${filterTasks ? filterTasks.length : 0} ${t('tasks')})`}
    </h2>
  );
};

export { Head };
