import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.246:9000/api",
});

apiClient.get("/listings").then((response) => {
  // calling the listings endpoint, we get a promise and when
  // this promise is resolved we get a response object.
  if (!response.ok) {
    response.problem;
  }
});
