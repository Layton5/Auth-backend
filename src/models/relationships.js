"use strict";
const { Sequelize } = require("sequelize");

const sequelize = require("../config/db/index");

const friend = "friend",
  follower = "follower",
  peer = "peer";

const validTypes = [friend, follower, peer];

const Relationship = sequelize.define(
  "relationships",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    // for type friend, it would require the user(userId) to turn accepted to true before the friendship is accepted
    // for type follower, you'd get updates (like posts etc by user(userId))
    type: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: validTypes,
    },
    userId: {
      allowNull: false,
      type: Sequelize.UUID,
    },
    ownerId: {
      allowNull: false,
      type: Sequelize.UUID,
    },
    accepted: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true, // enable soft delete feature
    freezeTableName: true,
    modelName: "relationships",
  }
);

// Define associations
Relationship.associate = (models) => {
  console.log("models", models);
  Relationship.belongsTo(models.Users, { foreignKey: "userId" });
  Relationship.belongsTo(models.Users, { foreignKey: "ownerId" });
};

module.exports = { Relationship, validTypes, friend, follower, peer };
