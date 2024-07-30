const Users = require("../models/users");

const create = async (data) => {
  return await Users.create(data);
};

const edit = async (data, findOption) => {
  return await Users.update(data, {
    where: findOption,
  });
};

const find = async (findOption) => {
  return await Users.findOne({
    where: findOption,
  });
};

const findAll = async (findOption) => {
  return await Users.findAll({
    where: findOption,
  });
};

const remove = async (id) => {
  return await Users.destroy({
    where: {
      id,
    },
  });
};

module.exports = { create, edit, find, findAll, remove };
