const { body } = require("express-validator");
const { friend, follower } = require("../../models/relationships");

const validTypes = [friend, follower];

const validateDeleteRelationship = () => [
  body("type")
    .notEmpty()
    .isString()
    .isIn(validTypes)
    .withMessage(`Type is invalid, must be one of ${validTypes.join(", ")}`),
  body("userId").optional().isUUID().withMessage("User is not valid"),
];

module.exports = validateDeleteRelationship;
