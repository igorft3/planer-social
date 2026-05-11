import { Todo } from "../App/Store.ts";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import styles from "./history.module.css";
const myTodo = new Todo();

export const History = observer(() => {
  const [input, setInput] = useState<string>("");

  const handleCreateTodo = () => {
    if (input.length) {
      myTodo.createTodo(input);
      setInput("");
    }
  };
  return (
    <>
      <h2>
        This page <i>History</i>
      </h2>
      <p>THis page's description</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Напишите что-то'
      />
      <button disabled={Boolean(!input.length)} onClick={() => handleCreateTodo()} >Жмяк</button>
      {myTodo.todoArray.map((item, index) => (
        <ul key={index}>
          <li
            style={{
              backgroundColor: `${item.done ? "rgba(2, 185, 13, 0.26)" : "rgba(255, 38, 0, 0.55)"}`,
            }}
            className={styles.listItem}
          >
            <p>{index + 1}</p>
            <p>{item.done ? "✅" : "❌"}</p>
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
