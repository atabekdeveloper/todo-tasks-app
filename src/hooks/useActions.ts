import React from 'react';
import { useDispatch } from 'react-redux';

import { bindActionCreators } from '@reduxjs/toolkit';

import { actions as shareds } from '../store/shared/shared.slice';
import { actions as tasks } from '../store/tasks/task.slice';

const rootActions = { ...shareds, ...tasks };

export const useActions = () => {
  const dispatch = useDispatch();
  return React.useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
