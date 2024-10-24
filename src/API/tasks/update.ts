import axiosInstance from "../axios.interceptor";
import { TaskI } from "./task.interface";

export default function updatePost(id:string, data:TaskI) {
  return new Promise(async (resolve, reject) => {
    axiosInstance
      .put("tasks/" + id, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
