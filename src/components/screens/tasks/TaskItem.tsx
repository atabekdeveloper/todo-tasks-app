/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import { message } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCheckCircle, AiFillDelete, AiFillStar } from 'react-icons/ai';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { IoMdCalendar } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { UiPopconfirm } from 'src/components/ui';
import { useActions, useResponsive, useSelectors } from 'src/hooks';
import {
  useDeleteTaskMutation,
  useEditTaskCompletedMutation,
  useEditTaskImportantMutation,
} from 'src/store/index.endpoints';
import { TTaskItem } from 'src/store/tasks/tasks.types';

const TaskItem: React.FC<TTaskItem> = (task) => {
  const { t } = useTranslation();
  const { toggleModal, setTask } = useActions();
  // eslint-disable-next-line object-curly-newline
  const { completed, date, description, dir, title, important, id } = task;

  const [deleteTask] = useDeleteTaskMutation();
  const [editImportant, { isLoading: importantLoading }] = useEditTaskCompletedMutation();
  const [editCompleted, { isLoading: completedLoading }] = useEditTaskImportantMutation();

  const onToggleEditTask = () => {
    toggleModal();
    setTask(task);
  };

  const showDeleteConfirm = async () => {
    await deleteTask(id);
    message.success(t('successDelete'));
  };

  const onEditImportant = async () => {
    await editImportant({ ...task, important: !important });
  };
  const onEditCompleted = async () => {
    await editCompleted({ ...task, completed: !completed });
  };

  const { mode } = useSelectors();
  const { isMobile } = useResponsive(770);
  return (
    <div className={`task-item ${mode}`}>
      <div className="task-item__dir none">{dir}</div>
      <div className="task-item__content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="task-item__content-date">
          <IoMdCalendar />
          <span>{date.substring(0, 10)}</span>
        </div>
      </div>
      <div className="task-item__status">
        <span
          className={`task-item__status-check ${completedLoading && 'active'}`}
          onClick={onEditCompleted}
        >
          {isMobile ? (
            completed ? (
              <AiFillCheckCircle className="task-item__status-check-ci" />
            ) : (
              <MdCancel className="task-item__status-check-ui" />
            )
          ) : completed ? (
            <span className="task-item__status-check-ct">{t('completedText')}</span>
          ) : (
            <span className="task-item__status-check-ut">{t('uncompletedText')}</span>
          )}
        </span>
        <span className="task-item__status-edit">
          <AiFillStar
            onClick={onEditImportant}
            className={clsx(
              'task-item__status-edit-icon',
              important && 'active',
              importantLoading && 'active-status',
            )}
          />
          <UiPopconfirm
            title={title}
            description={t('deletedDescription')}
            onConfirm={showDeleteConfirm}
            okText={t('okText')}
            cancelText={t('cancelText')}
          >
            <AiFillDelete className="task-item__status-edit-icon" />
          </UiPopconfirm>
          <HiEllipsisVertical className="task-item__status-edit-icon" onClick={onToggleEditTask} />
        </span>
      </div>
    </div>
  );
};

export { TaskItem };
