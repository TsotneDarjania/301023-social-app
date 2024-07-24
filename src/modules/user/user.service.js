import User from "./user.model.js";

export async function getCurrentUserService(userId) {
  const user = await User.findById(userId);
  user.password = undefined;
  return user;
}
