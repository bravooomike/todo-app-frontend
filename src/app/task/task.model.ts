import { TaskType } from "./task-type/task-type.model";
export class Task {
  id: number;
  summary: string;
  content: string;
  taskType: TaskType;
  taskStatusCode: string;
  createdDate: Date;
  expiredDate: Date;
  endedDate: Date;
  userId: number;
}
