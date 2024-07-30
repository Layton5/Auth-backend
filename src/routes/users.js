const { Router } = require("express");
const { getAllUsers } = require("../controller/users");
const authenticate = require("../middleware/auth");

const router = Router();

router.get("/all", authenticate, getAllUsers);

module.exports = router;
