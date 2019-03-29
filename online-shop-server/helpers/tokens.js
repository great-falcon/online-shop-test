const jwt = require("jsonwebtoken");
const { UnauthorizedError, ServerError } = require("./CustomError");

const authKey = "secret_key";

function createToken(body) {}

module.exports = {
  create: body =>
    new Promise(resolve => {
      jwt.sign(body, authKey, { expiresIn: "1d" }, (err, token) => {
        if (err) ServerError.throw(err);
        resolve(token);
      });
    }),

  check: token => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, authKey, (err, decoded) => {
        if (err) reject(UnauthorizedError.get("Invalid token"));
        resolve(decoded);
      });
    });
  }
};
