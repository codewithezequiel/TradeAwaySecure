import client from "./client";

const endpoint = "/listings";

function getListings() {
  return client.get(endpoint);
}

//simple api layer
export default {
  getListings,
};
