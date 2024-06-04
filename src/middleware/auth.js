import jwt from "jsonwebtoken";
import tokenModel from "../models/auth/token.js";
import { where } from "sequelize";
let authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  token = token.replace("Bearer ", "");
  console.log(token);
  const authToken = await tokenModel.findOne({
    where: { token: token },
  });
  if (!authToken) {
    return res.status(401).json({ message: "unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded, "req body");
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
export default authMiddleware;
