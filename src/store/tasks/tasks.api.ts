import { api } from '../index.api';

import { TTaskItem } from './tasks.types';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<TTaskItem[], string | null>({
      query: (value) => ({
        url: `/tasks?${value ? `search=${value}` : ''}`,
      }),
      providesTags: ['tasks'],
    }),
    addTask: builder.mutation<TTaskItem, TTaskItem>({
      query: (body) => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['tasks'],
    }),
    editTask: builder.mutation<any, TTaskItem>({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['tasks'],
    }),
    editTaskImportant: builder.mutation<any, TTaskItem>({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['tasks'],
    }),
    editTaskCompleted: builder.mutation<any, TTaskItem>({
      query: (body) => ({
        url: `/tasks/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['tasks'],
    }),
    deleteTask: builder.mutation<any, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
});
