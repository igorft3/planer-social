import { Todo } from "../App/Store.ts";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import styles from "./history.module.css";
const socialTodos = new Todo();

export const SocialManager = observer(() => {
  const [input, setInput] = useState<string>("");

  const handleCreateTodo = () => {
    if (input.length) {
      socialTodos.createTodo(input);
      setInput("");
    }
  };
  return (
    <>
      <h2>
        <i>Social manager</i>
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
      {socialTodos.todoArray.map((item, index) => (
        <ul key={index}>
          <li
            style={{
              backgroundColor: `${item.isDone ? "rgba(2, 185, 13, 0.26)" : ""}`,
            }}
            className={styles.listItem}
          >
            <p>{index + 1}</p>
            <p>{item.isDone ? "✅" : null}</p>
            <p>{item.text}</p>
            <p style={{ marginLeft: "auto" }}>id: {item.id.slice(0, 4)}</p>
            <button onClick={() => socialTodos.toggleTodo(item.id)}>
              Done
            </button>
            <button onClick={() => socialTodos.deleteTodo(item.id)}>x</button>
          </li>
        </ul>
      ))}
    </>
  );
});
