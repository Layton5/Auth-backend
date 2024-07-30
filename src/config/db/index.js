const Sequelize = require("sequelize");

const config = require("./config");

const env = process.env.NODE_ENV;

const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;
