const { Op } = require("sequelize");
const { findAll } = require("../repository/user");
const sendSuccess = require("./base");

const getAllUsers = async (req, res, next) => {
  const query = {
    id: {
      [Op.ne]: req.user.id,
    },
  };
  const users = await findAll(query);
  sendSuccess(res, users);
};

module.exports = { getAllUsers };
