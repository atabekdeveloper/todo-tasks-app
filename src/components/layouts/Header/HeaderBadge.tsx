import { Badge } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillBellFill } from 'react-icons/bs';
import { UiPopover } from 'src/components/ui';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import { HeaderTodayTask } from './HeaderTodayTask';

const HeaderBadge: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useGetTasksQuery(null);
  const uncompleted = data && data.filter((el) => !el.completed);
  return (
    <UiPopover
      title={t('uncompleted')}
      content={uncompleted?.length ? <HeaderTodayTask data={uncompleted} /> : t('notTask')}
      trigger="click"
      placement="bottomRight"
    >
      <Badge count={uncompleted?.length} color="red" size="small">
        <BsFillBellFill color="#5B21B6" size={25} cursor="pointer" />
      </Badge>
    </UiPopover>
  );
};

export { HeaderBadge };
