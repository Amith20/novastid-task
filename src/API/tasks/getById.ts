import axiosInstance from "../axios.interceptor";

export default function getPostById(id:string) {
  return new Promise(async (resolve, reject) => {
    axiosInstance
      .get("tasks/" + id)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
