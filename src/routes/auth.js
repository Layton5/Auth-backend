const { Router } = require("express");
const { register, login, me } = require("../controller/auth");
const authenticate = require("../middleware/auth");
const validate = require("../validators");
const { userCreationValidationRules } = require("../validators/users/create");

const router = Router();

router.post("/register", userCreationValidationRules(), validate, register);

router.post("/login", login);

router.get("/me", authenticate, me);

module.exports = router;
