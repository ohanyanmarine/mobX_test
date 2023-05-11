import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "HTML", completed: false },
    { id: 2, title: "css", completed: false },
    { id: 3, title: "JS", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }
  completedTodo(id) {
    console.log("completed");
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
