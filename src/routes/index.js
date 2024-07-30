const { Router } = require("express");
const authRouter = require("./auth");
const usersRouter = require("./users");
const relationshipsRouter = require("./relationships");

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/relationships", relationshipsRouter);

module.exports = router