import client from "./client";

const register = (pushTokens) =>
  client.post("/expoPushTokens", { token: pushToken });

export default { register };
