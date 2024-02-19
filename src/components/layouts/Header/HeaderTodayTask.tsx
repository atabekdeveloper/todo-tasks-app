import React from 'react';
import { TTaskItem } from 'src/store/tasks/tasks.types';

type THeaderTaskToday = {
  data?: TTaskItem[];
};

const HeaderTodayTask: React.FC<THeaderTaskToday> = ({ data }) => (
  <ul className="header__today-task">
    {data && data.map((task, i) => <li key={task.id}>{`${i + 1}. ${task.title}`}</li>)}
  </ul>
);

export { HeaderTodayTask };
