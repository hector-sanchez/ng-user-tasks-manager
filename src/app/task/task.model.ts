export interface INewTask {
  title: string;
  summary: string;
  dueDate: string;
}

export interface ITask extends INewTask {
  id: string;
  userId: string;
}
