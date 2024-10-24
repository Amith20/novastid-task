import { Button, TextField } from "@mui/material";
import createPost from "../API/tasks/create";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addTask, changeTask } from "../redux/reducer";

export default function Form() {
  const { tasks, task } = useAppSelector((state) => state.postManagement);
  const dispatch = useAppDispatch();
  function handleChange(event: any) {
    dispatch(changeTask({ ...task, [event.target.name]: event.target.value }));
  }
  function handleSubmit() {
    if (task.title && task.details) {
      createPost({ ...task, id: tasks.length.toString() }).then((res: any) => {
        dispatch(addTask(res));
      });
      dispatch(changeTask({ details: "", title: "" }));
    }
  }
  return (
    <>
      <TextField
        label="Task"
        variant="outlined"
        name="title"
        value={task.title}
        onChange={handleChange}
      />
      <TextField
        label="Description"
        variant="outlined"
        name="details"
        value={task.details}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
