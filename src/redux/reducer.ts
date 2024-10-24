import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskI } from "../API/tasks/task.interface";
const initialState: {
  tasks: TaskI[];
  task: TaskI;
} = {
  tasks: [],
  task: { completed: true, details: "", id: "1", title: "" },
};

export const taskSlice = createSlice({
  name: "taskManagement",
  initialState,
  reducers: {
    setAllTask: (state, action: PayloadAction<TaskI[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<TaskI>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((e) => e.id !== action.payload);
    },
    update: (state, action: PayloadAction<{ id: string; task: TaskI }>) => {
      state.tasks = state.tasks.map((e) => {
        if (e.id === action.payload.id) {
          return action.payload.task;
        }
        return e;
      });
    },
    changeTask: (
      state,
      action: PayloadAction<{ title: string; details: string }>
    ) => {
      state.task = { ...state.task, ...action.payload };
    },
  },
});

export const { setAllTask, addTask, deleteTask, changeTask, update } =
  taskSlice.actions;

export default taskSlice.reducer;
