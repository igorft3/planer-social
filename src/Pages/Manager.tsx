import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Todo } from "../App/Store.ts";
import styles from "./history.module.css";

const myTodo = new Todo();

export const Manager = observer(() => {
  const [input, setInput] = useState<string>("");

  const handleCreateTodo = () => {
    if (input.length) {
      myTodo.postTodo(input);
      setInput("");
    }
  };
  return (
    <>
      <h2>
        <i>Manager yourself task</i>
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Напишите какую нибудь задачку"
        />
        {/* TODO: добавить обработку по ентер клавише*/}
        <button disabled={Boolean(!input.length)} onClick={handleCreateTodo}>
          Добавить
        </button>
      </div>
      {myTodo.todoArray.map((item, index) => (
        <ul key={index}>
          <li
            style={{
              backgroundColor: `${item.isDone ? "rgba(2, 185, 13, 0.26)" : "rgba(255, 38, 0, 0.55)"}`,
            }}
            className={styles.listItem}
          >
            <p>{index + 1}</p>
            <p>{item.isDone ? "✅" : null}</p>
            <p>{item.text}</p>
            <p style={{ marginLeft: "auto" }}>id: {item.id.slice(0, 4)}</p>
            <button onClick={() => myTodo.toggleTodo(item.id)}>Done</button>
            <button onClick={() => myTodo.deleteTodo(item.id)}>x</button>
          </li>
        </ul>
      ))}
    </>
  );
});
