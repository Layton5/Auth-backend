const createError = require("http-errors");
const { omitBy, omit } = require("lodash");
const { find } = require("../repository/user");
const { verifyToken } = require("../utils/token");

function validateUUID(uuid) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

const authenticate = async (request, response, next) => {
  try {
    let token =
      request.headers["x-access-token"] || request.headers["authorization"];
    let checkBearer = "Bearer ";
    if (!token) {
      throw createError[401](`No user token found`);
    }
    token = token.slice(checkBearer.length, token.length);
    const userToken = verifyToken(token);
    if (!userToken.id || !validateUUID(userToken.id))
      throw createError.BadRequest(`No user token found`);
    const user = await find({
      id: userToken.id,
    });
    if (!user) {
      throw createError.BadRequest(
        `Sorry your Account wasn't found, contact support`
      );
    }
    request.user = omit(user.dataValues, ["password"]);
    next();
    return;
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
