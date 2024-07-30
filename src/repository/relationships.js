const { Relationship } = require("../models/relationships");

const create = async (data) => {
  return await Relationship.create(data);
};

const edit = async (data, findOption) => {
  return await Relationship.update(data, {
    where: findOption,
  });
};

const find = async (findOption) => {
  return await Relationship.findOne({
    where: findOption,
  });
};

const findAll = async (findOption) => {
  return await Relationship.findAll({
    where: findOption,
  });
};

const remove = async (id) => {
  return await Relationship.destroy({
    where: {
      id,
    },
  });
};

module.exports = { create, edit, find, findAll, remove };
