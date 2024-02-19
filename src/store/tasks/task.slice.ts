import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TTask, TTaskItem } from './tasks.types';

const initialState: TTask = {
  task: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask(state, { payload }: PayloadAction<TTaskItem | null>) {
      state.task = payload;
    },
  },
});
export const { reducer, actions } = taskSlice;
