import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.246:9000/api",
});

// all i am doing here is simply exporting apiClient as the default object.
export default apiClient;


