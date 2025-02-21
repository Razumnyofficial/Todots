import styles from "./TaskInput.module.css";

const TaskInput = () => {
  return (
    <div className={styles.container}>
      <form>
        <input type="text" placeholder="Add a task" className="inputTask" />
        <button>Add</button>
      </form>
      <h1>TaskInput</h1>
    </div>
  );
};

export default TaskInput;
