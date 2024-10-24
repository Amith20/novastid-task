import axiosInstance from "../axios.interceptor";

export default function getAllTask() {
  return new Promise(async (resolve, reject) => {
    axiosInstance
      .get("tasks")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
