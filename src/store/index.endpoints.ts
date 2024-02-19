import { tasksApi } from './tasks/tasks.api';

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useEditTaskCompletedMutation,
  useEditTaskImportantMutation,
  useDeleteTaskMutation,
} = tasksApi;
