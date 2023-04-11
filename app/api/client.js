import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.246:9000/api",
});

// Changing the implementation of the get method
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  // Before
  const response = await get(url, params, axiosConfig);

  // After
  if (response.ok) {
    // store data in the cache, caching every get request for this app
    cache.store(url, response.data);
    // returning the same object as the original get function
    return response;
  }

  // no internet connection scenario
  const data = await cache.get(url);
  // if we have the data we return this simulated successful response otherwise we want to return the
  // original response object containing info why call to server failed.
  return data ? { ok: true, data } : response;
};

// all i am doing here is simply exporting apiClient as the default object.
export default apiClient;
