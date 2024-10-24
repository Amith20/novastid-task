import axiosInstance from "../axios.interceptor";

export default function deleteTaskApi(id:string) {
  return new Promise(async (resolve, reject) => {
    axiosInstance
      .delete("tasks/" + id)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
