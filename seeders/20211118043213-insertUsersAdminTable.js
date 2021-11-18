"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          given_name: "John Doe",
          email: "raihanrobbani123@gmail.com",
          password:
            "$2a$10$Fx0aZvUGYRg63rdkwM2G2.iZ0m5nSwfWkdLGYOsURIYPi35ui0a7O",
          mobile_num: "085156054979",
          address: "Yasmin Bogor",
          role: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
