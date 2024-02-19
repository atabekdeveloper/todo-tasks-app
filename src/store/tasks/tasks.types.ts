export type TTaskItem = {
  title: string;
  dir: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
  id: string;
};
export interface TTask {
  task: TTaskItem | null;
}
