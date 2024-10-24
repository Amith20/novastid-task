import React, { useEffect } from "react";
import "./App.css";
import TableComponent from "./Components/Table";
import Form from "./Components/Form";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import getAllTask from "./API/tasks/allTasks";
import { setAllTask } from "./redux/reducer";

function App() {
  const tasks = useAppSelector((state) => state.postManagement.tasks);
  const dispatch = useAppDispatch();
  function getAllTaskFN() {
    getAllTask().then((res: any) => {
      dispatch(setAllTask(res));
    });
  }
  useEffect(() => {
    getAllTaskFN();
  }, []);
  return (
    <>
      <Form />
      <TableComponent data={tasks} />
    </>
  );
}

export default App;
