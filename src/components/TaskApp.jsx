import React, { useState } from "react";
import { AddTask } from "./AddTask";
import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  // NOTE: do not delete data-cy key value pair
  const [todo, setTodo] = useState([]);
  const deleteTodo = (Id) => {
    setTodo(todo.filter((todo) => todo.Id !== Id));
  };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask todo={todo} setTodo={setTodo} />
      <Tasks value={todo} deleteTodo={deleteTodo} />
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
