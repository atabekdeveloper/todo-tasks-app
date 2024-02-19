/* eslint-disable operator-linebreak */
import React from 'react';
import { useFilterTasks, useSelectors } from 'src/hooks';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import { NotTask } from '../notTask/NotTask';

import { TaskItem } from './TaskItem';
import { TaskLoadingItem } from './TaskLoadingItem';

import './tasks.scss';

const Tasks: React.FC = React.memo(() => {
  const [taskShow, setTaskShow] = React.useState(false);
  const [oneTaskShow, setOneTaskShow] = React.useState(false);

  const { searchValue } = useSelectors();

  const { data, isLoading, isSuccess } = useGetTasksQuery(searchValue);
  const filterData = useFilterTasks({ data });
  React.useEffect(() => {
    if (isSuccess) {
      if (!filterData?.length) setTaskShow(true);
      else setTaskShow(false);
    }
  }, [filterData, isSuccess]);
  React.useEffect(() => {
    if (filterData) {
      if (filterData.length === 1) setOneTaskShow(true);
      else setOneTaskShow(false);
    }
  }, [filterData]);
  if (taskShow) {
    return <NotTask />;
  }
  return (
    <div className={`tasks ${oneTaskShow && 'task'}`}>
      {isLoading
        ? [...Array(5)].map((_, i) => <TaskLoadingItem key={i} />)
        : filterData?.map((task) => <TaskItem key={task.id} {...task} />)}
    </div>
  );
});

export { Tasks };
