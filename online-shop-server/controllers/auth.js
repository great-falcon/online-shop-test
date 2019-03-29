const {
  UnauthorizedError,
  BadRequestError,
  NotFoundError
} = require("../helpers/CustomError");
const UserModel = require("../models/User");
const tokens = require("../helpers/tokens");

module.exports = {
  login: (req, res, next) =>
    UserModel.findOne({ email: req.body.email })
      .then(user => {
        if (!user) NotFoundError.throw("User doesn't exist");
        if (user.password !== req.body.password)
          UnauthorizedError.throw("Invalid credentials");
        return user;
      })
      .then(user => tokens.create({ user_id: user._id }))
      .then(token => res.json(token))
      .catch(next),

  register: (req, res, next) =>
    new UserModel(req.body)
      .save()
      .catch(() => {
        BadRequestError.throw(
          "Some of the details are invalid or such user already exists"
        );
      })
      .then(new_user => res.status(201).json(new_user.email))
      .catch(next)
};
