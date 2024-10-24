import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TaskI } from "../API/tasks/task.interface";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, IconButton } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import deleteTaskApi from "../API/tasks/delete";
import { deleteTask, update } from "../redux/reducer";
import updatePost from "../API/tasks/update";

export default function TableComponent({ data }: { data: TaskI[] }) {
  const dispatch = useAppDispatch();
  function deleteRow(id: string) {
    deleteTaskApi(id).then((res: any) => {
      dispatch(deleteTask(res.id));
    });
  }
  function toggleCompletefn(id: string, row: TaskI) {
    updatePost(id, { ...row, completed: !row.completed }).then((res: any) => {
      dispatch(update({ id, task: res }));
    });
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.details}</TableCell>
              <TableCell align="right">
                <Checkbox
                  onChange={() => toggleCompletefn(row.id, row)}
                  checked={row.completed}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => {
                    deleteRow(row.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
