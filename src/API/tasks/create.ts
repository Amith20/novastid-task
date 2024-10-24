import axiosInstance from "../axios.interceptor";
import { TaskI } from "./task.interface";

export default function createPost(data:TaskI) {
  return new Promise(async (resolve, reject) => {
    axiosInstance
      .post("tasks", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
