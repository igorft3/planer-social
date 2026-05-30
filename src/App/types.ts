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

export type StatusType = (typeof STATUS_MAP)[keyof typeof STATUS_MAP];
