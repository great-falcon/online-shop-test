const {
  body,
  param,
  query,
  validationResult
} = require("express-validator/check");
const { UnprocessableEntityError } = require("../helpers/CustomError");

module.exports = {
  auth: (req, res, next) => {
    return [body("email").isEmail(), body("password").isString()];
  },

  eventGet: (req, res, next) => {
    return [
      query("pagesize")
        .isNumeric()
        .optional(),
      query("page")
        .isNumeric()
        .optional(),
      query("date")
        .isISO8601()
        .optional()
    ];
  },

  eventPost: (req, res, next) => {
    return [body("date").isRFC3339(), body("name").isString()];
  },

  eventPut: (req, res, next) => {
    return [
      body("date").isRFC3339(),
      body("name").isString(),
      param("id").isMongoId()
    ];
  },

  result: (req, res, next) => {
    validationResult(req).isEmpty()
      ? next()
      : next(UnprocessableEntityError.get("Invalid or missing require value"));
  }
};
