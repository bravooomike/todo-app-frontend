import { TaskType } from "./task-type/task-type.model";
import { TaskStatus } from "./task-status/task-status.model";

export class Task {
  id: number;
  summary: string;
  content: string;
  taskType: TaskType;
  taskStatus: TaskStatus;
  createdDate: Date;
  expiredDate: Date;
  endedDate: Date;
  userId: number;
}
