import client from "./client";

// File purpose: Extend the api layer and implement the ability to register a push token.

const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
