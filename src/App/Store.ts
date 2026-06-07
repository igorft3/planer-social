import { makeAutoObservable, runInAction } from "mobx";
import {
  postTodosApi,
  deleteTodosApi,
  getTodosApi,
  toggleTodosApi,
} from "./api.ts";
import type { TodoArrayValue, StatusType } from "./types.ts";
import { STATUS_MAP } from "./types.ts";

export class Todo {
  todoArray: TodoArrayValue[] = [
    // { id: "1234", text: "Example", isDone: true, date: new Date() },
  ];

  state: StatusType = STATUS_MAP.PENDING;

  currentUser = {
    id: "blablac13",
    name: "Igor",
    login: "igorft3",
    password: "123",
  };
  newUser = {
    id: "471cBw61",
    name: "Vlad",
    login: "radigos",
    password: "321",
  };

  constructor() {
    makeAutoObservable(this);
    // this.getTodos(this.newUser.id);
    this.getTodos();
    // this.getSomeThin(this.currentUser.id);
  }
  // CRUD

  // createTodo(text: string) {
  //   const newObject = {
  //     id: crypto.randomUUID().toString(),
  //     text: text,
  //     isDone: false,
  //     date: new Date(),
  //   };
  //
  //   this.todoArray.push(newObject);
  // }

  // deleteTodo(id: string) {
  //   this.todoArray = this.todoArray.filter((item) => item.id !== id);
  // }

  // toggleTodo(id: string) {
  //   const todoId = this.todoArray.find((item) => item.id === id);
  //   if (todoId) {
  //     todoId.isDone = !todoId.isDone;
  //   }
  // }

  getTodos() {
    this.state = STATUS_MAP.PENDING;
    getTodosApi()
      .then((items) => {
        runInAction(() => {
          this.todoArray = items;
          this.state = STATUS_MAP.SUCCESS;
        });
      })
      .catch(() => {
        runInAction(() => {
          this.state = STATUS_MAP.ERROR;
        });
      });
  }

  postTodo(text: string) {
    this.state = STATUS_MAP.PENDING;
    const newObject = {
      id: crypto.randomUUID().toString(),
      text: text,
      isDone: false,
      date: new Date().toISOString(),
    };

    postTodosApi(newObject)
      .then(() => {
        runInAction(() => {
          this.state = STATUS_MAP.SUCCESS;
          this.getTodos();
        });
      })
      .catch(() => {
        runInAction(() => {
          this.state = STATUS_MAP.ERROR;
        });
      });
  }

  deleteTodo(id: string) {
    this.state = STATUS_MAP.PENDING;

    deleteTodosApi(id)
      .then(() => {
        runInAction(() => {
          this.getTodos();
          this.state = STATUS_MAP.SUCCESS;
        });
      })
      .catch(() => {
        runInAction(() => {
          this.state = STATUS_MAP.ERROR;
        });
      });
  }

  // TODO: текущая структура бэка не дает реализовать
  // getTodos(userId: string) {
  //   this.state = STATUS_MAP.PENDING;
  //   getTodosApi(userId)
  //     .then((items) => {
  //       runInAction(() => {
  //         this.todoArray = items[0].todos;
  //         this.state = STATUS_MAP.SUCCESS;
  //       });
  //     })
  //     .catch(() => {
  //       runInAction(() => {
  //         this.state = STATUS_MAP.ERROR;
  //       });
  //     });
  // }

  toggleTodo(id: string) {
    this.state = STATUS_MAP.PENDING;
    toggleTodosApi(id)
      .then(() => {
        runInAction(() => {
          this.getTodos();
          this.state = STATUS_MAP.SUCCESS;
        });
      })
      .catch(() => {
        runInAction(() => {
          this.state = STATUS_MAP.ERROR;
        });
      });
  }
}
