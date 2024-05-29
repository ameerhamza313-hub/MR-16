import jwt from "jsonwebtoken";
let authMiddleware = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  token = token.replace("Bearer ", "");
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded, "req body");
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "unauthorized" });
  }
};
export default authMiddleware;
