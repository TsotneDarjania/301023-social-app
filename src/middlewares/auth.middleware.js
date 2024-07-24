import jsonwebtoken from "jsonwebtoken";
import { JSON_WEB_TOKEN_SECRET } from "../utils/index.js";

export function checkAuth(req, res, next) {
  const token = req.headers?.authorization?.split(" ")?.[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jsonwebtoken.verify(token, JSON_WEB_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = decoded;
    res.user = decoded;
    next();
  });
}