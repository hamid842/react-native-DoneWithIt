import clent from "./client";

const register = (userInfo) => clent.post("/users", userInfo);

export default { register };
