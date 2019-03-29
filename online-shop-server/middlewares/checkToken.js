const tokens = require("../helpers/tokens");
const { UnauthorizedError } = require("../helpers/CustomError");

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next(UnauthorizedError.get("Missing token"));
    return;
  }
  token = req.headers.authorization.substring(7);
  tokens
    .check(token)
    .then(payload => {
      next();
    })
    .catch(() => next(UnauthorizedError.get("Invalid token")));
};
