import styles from "./TaskStatus.module.css";

const TaskStatus = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.todostatus}>
        <li>все задачи</li>
        <li>в работе</li>
        <li>закончил</li>
      </ul>
    </div>
  );
};

export default TaskStatus;
