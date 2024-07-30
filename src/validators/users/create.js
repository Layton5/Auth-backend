const { body } = require("express-validator");

const userCreationValidationRules = () => [
  body("firstName")
    .isString()
    .notEmpty()
    .withMessage("First Name is required")
    .isAlpha()
    .withMessage("First Name can only be alphabets"),
  body("lastName")
    .isString()
    .notEmpty()
    .withMessage("Last Name is required")
    .isAlpha()
    .withMessage("Last Name can only be alphabets"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

module.exports = { userCreationValidationRules };
