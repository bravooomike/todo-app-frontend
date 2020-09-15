import { TaskType } from "./task-type/task-type.model";
import { TaskStatus } from "./task-status/task-status.model";

export class Task {
  id: number = null;
  summary: string = null;
  content: string = null;
  taskType: TaskType = null;
  taskStatus: TaskStatus = null;
  createdDate: Date = null;
  expiredDate: Date = null;
  endedDate: Date = null;
  userId: number = null;

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
