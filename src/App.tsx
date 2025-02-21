import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskLIst/TaksList";
import TaskStatus from "./components/TaskStatus/TaskStatus.tsx";

const App = () => {
  return (
    <>
      <h1>App</h1>
      <TaskInput />
      <TaskStatus />
      <TaskList />
    </>
  );
};

export default App;
