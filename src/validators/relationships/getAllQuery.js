const { query } = require("express-validator");
const { validTypes } = require("../../models/relationships");

const validateGetUsers = () => [
  query("type").optional().isString().isIn(validTypes).withMessage(`Type is invalid, must be one of ${validTypes.join(", ")}`),
  query("userId").optional().isUUID().withMessage("User is not valid"),
  query("ownerId").optional().isUUID().withMessage("Owner is invalid"),
  query("accepted").optional().isBoolean().withMessage("accepted is invalid"),
];

module.exports = validateGetUsers;
