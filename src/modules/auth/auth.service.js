import User from "../User/user.model.js";
import { hashPassword, comparePasswords, createAccessToken } from "../../utils/index.js";

export async function registerUser(body) {
  const hashedPassword = await hashPassword(body.password);
  const user = new User({
    username: body.username,
    password: hashedPassword,
  });
  await user.save();
  return user;
}

export async function loginUser(body) {
  const { username, password } = body;

  const user = await User.findOne({ username: { $eq: username } });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw new Error("invalid login credetials");
  }

  const accessToken = createAccessToken({
    userId: user.id,
    username: user.username,
  });

  return { accessToken };
}
