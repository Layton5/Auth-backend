const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds to use

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error hashing password`);
  }
};

const comparePassword = async (plainPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    return match;
  } catch (error) {
    throw new Error(`Error comparing password`);
  }
};

module.exports = { hashPassword, comparePassword };
