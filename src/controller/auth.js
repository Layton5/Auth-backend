const { registerUser, loginUser } = require("../services/auth");
const sendSuccess = require("./base");

const register = async (req, res, next) => {
  const body = req.body;
  try {
    const data = await registerUser(body);
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const body = req.body;
  try {
    const data = await loginUser(body);
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const me = (req, res, next) => {
  sendSuccess(res, req.user);
};

module.exports = { register, login, me };
