const { Router } = require("express");
const {
  addUserAsRelation,
  getAll,
  removeRelation,
} = require("../controller/relationships");
const authenticate = require("../middleware/auth");
const validate = require("../validators");
const {
  validateAddRelationship,
} = require("../validators/relationships/create");
const validateDeleteRelationship = require("../validators/relationships/delete");
const validateGetUsers = require("../validators/relationships/getAllQuery");

const router = Router();

router.post(
  "/add-relation",
  authenticate,
  validateAddRelationship(),
  validate,
  addUserAsRelation
);
router.post(
  "/remove-relation",
  authenticate,
  validateDeleteRelationship(),
  validate,
  removeRelation
);
router.get("/all", authenticate, validateGetUsers(), validate, getAll);

module.exports = router;
