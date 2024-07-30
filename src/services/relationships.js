const {
  find,
  create,
  findAll,
  remove,
} = require("../repository/relationships");
const createError = require("http-errors");
const { friend } = require("../models/relationships");

const addUserAsRelationService = async (body, ownerId) => {
  const userId = body.userId;
  if (userId === ownerId) throw createError[403]("Operation not allowed");
  const type = body.type;
  // check if user has that user as relation with same type before
  const relationExist = await find({
    userId,
    type,
    ownerId,
  });
  if (relationExist)
    throw createError[400](
      type === friend && !relationExist.accepted
        ? `You already sent a friend request`
        : `You are already related to this user as a ${type}`
    );
  const accepted = type === "friend" ? false : true;
  // create relation
  const relation = await create({
    ...body,
    ownerId,
    accepted,
  });
  return relation;
};

const removeRelationService = async (body, ownerId) => {
  const userId = body.userId;
  if (userId === ownerId) throw createError[403]("Operation not allowed");
  const type = body.type;
  const relationExist = await find({
    userId,
    type,
    ownerId,
  });
  await remove({
    id: relationExist.id,
  });
  return;
};

const getAllService = async (optionQuery) => {
  // if user is getting relations that are friends then the accepted key needs to be true because friends need to be accepted
  if (optionQuery?.type === friend) optionQuery["accepted"] = true;
  if (optionQuery?.type !== friend && optionQuery?.accepted)
    delete optionQuery.accepted;
  return await findAll(optionQuery);
};

module.exports = { addUserAsRelationService, getAllService, removeRelationService };
