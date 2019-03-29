const authRouter = require("express").Router();
const auth = require("./controllers/auth");
const validations = require("./middlewares/validations");

authRouter.post("/login", validations.auth(), validations.result, auth.login);

authRouter.post(
  "/register",
  validations.auth(),
  validations.result,
  auth.register
);

module.exports = authRouter;