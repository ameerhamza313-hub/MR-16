import userModel from "../../models/user/index.js";
import jwt from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import tokenModel from "../../models/auth/token.js";

const authController = {
  singUp: async (req, res) => {
    try {
      const payload = req.body;
      const userCheck = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (userCheck) {
        res.status(400).json({ message: "user already exits" });
      }
      const hPassword = await hash(payload.password, 10);

      const user = await userModel.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: hPassword,
      });
      res.status(200).json({ message: "user register successfully", });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }, 

  singIn: async (req, res) => {
    try {
      const payload = req.body;
      const userCheck = await userModel.findOne({
        where: {
          email: payload.email,
        },
      });
      if (!userCheck) {
        res.status(401).json({ message: "invalid credentials" });
      };

      const comparePassword = await compare(
        payload.password,
        userCheck.password
      );
      if (!comparePassword) {
        res.status(401).json({ message: "invalid credentials" });
      };
      

      const data = {
        id: userCheck.id,
        email: userCheck.email,
        firstName: userCheck.firstName,
      };
      const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.ExpireIn
      });
      await tokenModel.create(
        {token},
      );
      res.status(200).json({ data: token, payload });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error",error });
    }
  },
};
export default authController;
