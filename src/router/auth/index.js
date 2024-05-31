import { Router } from "express";
import authController from "../../controller/auth/index.js";
import authMiddleware from "../../middleware/auth.js";
const authRouter = Router();

authRouter.post("/user/signUp"  , authController.singUp);
authRouter.post("/user/signIn", authController.singIn);

export default authRouter;
