const { pick } = require("lodash");
const {
  addUserAsRelationService,
  getAllService,
  removeRelationService,
} = require("../services/relationships");
const sendSuccess = require("./base");

const addUserAsRelation = async (req, res, next) => {
  const body = req.body;
  const ownerId = req.user.id;
  try {
    const data = await addUserAsRelationService(body, ownerId);
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const removeRelation = async (req, res, next) => {
  const body = req.body;
  const ownerId = req.user.id;
  try {
    const data = await removeRelationService(body, ownerId);
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  let query = req?.query ?? {};
  query = pick(query, ["type", "userId", "ownerId", "accepted"]);
  try {
    const data = await getAllService({ ...query });
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

module.exports = { addUserAsRelation, getAll, removeRelation };
