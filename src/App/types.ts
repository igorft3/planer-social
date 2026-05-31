export interface TodoArrayValue {
  id: string;
  text: string;
  isDone: boolean;
  date: Date | string;
}

export const STATUS_MAP = {
  PENDING: "pending",
  ERROR: "error",
  SUCCESS: "success",
} as const;

export interface storeTodos {
  id: string;
  name: string;
  author: string;
  members: Array<string>;
  todos: Array<[]>;
}

export type StatusType = (typeof STATUS_MAP)[keyof typeof STATUS_MAP];
