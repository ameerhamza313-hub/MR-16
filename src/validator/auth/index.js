import joi from "joi";
const authValidator = {
  signIn: (req, res, next) => {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ message: "invalid data", error });
    }
    next();
  },
};

export default authValidator;
