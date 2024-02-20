export type TodoList = {
  id?: string;
  label: string;
  order?: number;
  icon?: string;
  todoCount: number;
  dateCreated?: Date;
  dateUpdated?: Date;
};
