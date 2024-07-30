const { body } = require("express-validator");
const { validTypes } = require("../../models/relationships");

const validateAddRelationship = () => [
  body("type")
    .notEmpty()
    .isString()
    .isIn(validTypes)
    .withMessage(`Type is invalid, must be one of ${validTypes.join(", ")}`),
  body("userId").notEmpty().isUUID().withMessage("User is not valid"),
];

module.exports = { validateAddRelationship };
