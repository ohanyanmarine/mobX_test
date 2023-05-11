import React from "react";
import { observer } from "mobx-react-lite";
import todo from "../Store/todo";

const Todo = observer(() => {
  return (
    <div>
      {todo.todos.map((t) => (
        <div key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => todo.completedTodo(t.id)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
