"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("relationships", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      // type friend would require the userId to turn accepted to true before its accepted
      // for type follower, you'd get updates (like posts etc by user with userId)
      type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["friend", "follower", "peer"],
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("relationships");
  },
};
