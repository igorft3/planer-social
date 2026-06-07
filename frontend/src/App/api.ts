import axios from "axios";
import type { TodoArrayValue } from "./types.ts";

const API = "http://localhost:3001";

const api = axios.create({
  baseURL: API,
  timeout: 1000,
});

export const getTodosApi = async () => {
  const response = await api.get("/todos");
  return response.data;
};

// TODO: А ГДЕ БЛЯДЬ ТРАЙ КЕТЧ?
export const postTodosApi = async (items: TodoArrayValue) => {
  // TODO: json server не умеет вкладывтаь вложенность.
  return await api.post("/todos", items);
};

export const deleteTodosApi = async (id: string) => {
  return await api.delete(`/todos/${id}`);
};

// TODO: текущая структура бэка не дает реализовать
// export const getTodosApi = async (userId: string) => {
//   const response = await api.get("/newTodos");
//   const filteredData = response.data.filter(
//     (item: storeTodos) => item.author === userId,
//   );
//   return filteredData;
// };

export const toggleTodosApi = async (id: string) => {
  const requestRes = await api.get(`/todos/${id}`);
  const currenDone = requestRes.data.isDone;
  await api.patch(`/todos/${id}/`, {
    isDone: !currenDone,
  });
};
