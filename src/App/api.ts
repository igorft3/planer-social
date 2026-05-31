import axios from "axios";
import type { TodoArrayValue, storeTodos } from "./types.ts";

const API = "http://localhost:3001";

const api = axios.create({
  baseURL: API,
  timeout: 1000,
});

// export const getTodosApi = async () => {
//   const response = await api.get("/todos");
//   return response.data;
// };

export const postTodosApi = async (items: TodoArrayValue) => {
  return await api.post("/todos", items);
};

export const deleteTodosApi = async (id: string) => {
  // console.log("id", id);
  return await api.delete(`/todos/${id}`);
};

export const getTodosApi = async (id) => {
  const response = await api.get("/newTodos");
  const filteredData = response.data.filter(
    (item: storeTodos) => item.author === id,
  );
  return filteredData;
};
