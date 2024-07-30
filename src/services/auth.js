const { omitBy } = require("lodash");
const { find, create } = require("../repository/user");
const { hashPassword, comparePassword } = require("../utils/encrypt");
const { createToken } = require("../utils/token");

const formatUserDetails = (user) => {
  return {
    token: createToken({ id: user.id }),
  };
};

const registerUser = async (data) => {
  const userExist = await find({ email: data.email });
  // check if user exist by email
  if (userExist) throw new Error("User already exist");
  // encrypt user password
  const passwordHash = await hashPassword(data.password);
  const userDetails = {
    ...data,
    password: passwordHash,
  };
  const user = await create(userDetails);
  return formatUserDetails(user);
};

const loginUser = async (data) => {
  // check if user exist by email
  const user = await find({ email: data.email });
  if (!user) throw new Error("Invalid user credentials");
  // compare password
  const passwordMatches = await comparePassword(data.password, user.password);
  if (!passwordMatches) throw new Error("Invalid user credentials");
  // send user token and user details
  return formatUserDetails(user);
};

module.exports = { registerUser, loginUser };
