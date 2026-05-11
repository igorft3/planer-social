import { makeAutoObservable } from "mobx";

interface TodoArrayValue {
  id: string;
  text: string;
  done: boolean;
  date: Date;
}

export class Todo {
  todoArray: TodoArrayValue[] = [
    { id: "123", text: "Example", done: true, date: new Date() },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  // CRUD

  createTodo(text: string) {
    const newObject = {
      id: crypto.randomUUID().toString(),
      text: text,
      done: false,
      date: new Date(),
    };

    this.todoArray.push(newObject);
  }

  deleteTodo(id: string) {
    this.todoArray = this.todoArray.filter((item) => item.id !== id);
  }

  toggleTodo(id: string) {
    const todoId = this.todoArray.find((item) => item.id === id);
    if (todoId) {
      todoId.done = !todoId.done;
    }
  }
}
