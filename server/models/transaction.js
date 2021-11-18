"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init(
    {
      id_FVA: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Id FVA is required",
          },
          notNull: {
            msg: "Id FVA is required",
          },
        },
      },
      external_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "External id is required",
          },
          notNull: {
            msg: "External id is required",
          },
        },
      },
      account_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Account number is required",
          },
          notNull: {
            msg: "Account number is required",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Status is required",
          },
          notNull: {
            msg: "Status is required",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User id is required",
          },
          notNull: {
            msg: "User id is required",
          },
        },
      },
      PropertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "User id is required",
          },
          notNull: {
            msg: "User id is required",
          },
        },
      },
      bank_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Bank is required",
          },
          notNull: {
            msg: "Bank is required",
          },
        },
      },
    },

    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
