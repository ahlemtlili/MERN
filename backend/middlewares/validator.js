const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("email", "this field should be a valid email").isEmail(),
  check("password", "password should have at least 6 char").isLength({
    min: 5,
  }),
  check("fullName", "this field is required").notEmpty(),
];

exports.loginRules = () => [
  check("email", "this field should be a valid email").isEmail(),
  check("password", "password should have at least 6 char").isLength({
    min: 5,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  next();
};
