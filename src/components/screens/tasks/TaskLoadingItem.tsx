import { Skeleton } from 'antd';
import React from 'react';

const TaskLoadingItem: React.FC = () => (
  <div className="task-item">
    <Skeleton />
  </div>
);

export { TaskLoadingItem };
