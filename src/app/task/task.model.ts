import { TaskType } from "./task-type/task-type.model";
import { TaskStatus } from "./task-status/task-status.model";

export class Task {
  id: number = null;
  summary: string;
  content: string;
  taskType: TaskType;
  taskStatus: TaskStatus;
  createdDate: Date;
  expiredDate: Date;
  endedDate: Date;
  userId: number;

  constructor() {}

  public getValue() {
    return (
      this.id +
      this.summary +
      this.content +
      this.taskType.name +
      this.taskStatus.name +
      this.createdDate +
      this.expiredDate +
      this.endedDate
    );
  }
}
