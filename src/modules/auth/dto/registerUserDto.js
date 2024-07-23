import { body } from "express-validator";

export const RegisterUserDto = [
  body("username")
    .notEmpty()
    .withMessage("არ უნდა იყოს ცარიელი")
    .isLength({ min: 6 })
    .withMessage("შეიყვანეთ მინიმუმ 6 სიმბოლო"),
  body("password")
    .notEmpty()
    .withMessage("არ უნდა იყოს ცარიელი")
    .isLength({ min: 8 })
    .withMessage("შეიყვანეთ მინიმუმ 8 სიმბოლო"),
];
