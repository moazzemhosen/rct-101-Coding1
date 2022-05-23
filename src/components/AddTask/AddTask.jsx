import React, { useState } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";

const AddTask = (props) => {
  const [value, setValue] = useState("");
  // NOTE: do not delete data-cy key value pair
  const handelchange = () => {
    props.setTodo([...props.todo, { Id: uuidv4(), Value: value }]);
    setValue("");
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        value={value}
        type="text"
        placeholder="Add task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button data-cy="add-task-button" onClick={handelchange}>
        +
      </button>
    </div>
  );
};

export default AddTask;
