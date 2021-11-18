const { Property, BookMark } = require("../models");

class Controller {
  static async getAllProperty(req, res, next) {
    try {
      let response = await Property.findAll({
        where: {
          status: "Active",
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getBookMark(req, res, next) {
    try {
      let response = await BookMark.findAll({
        include: Property,
        where: {
          UserId: req.user.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async postBookMark(req, res, next) {
    try {
      let property = await Property.findByPk(+req.params.id);
      if (!property) {
        throw {
          message: "Property not found",
        };
      }
      let [response, created] = await BookMark.findOrCreate({
        where: {
          UserId: req.user.id,
          PropertyId: property.id,
        },
        default: {
          UserId: req.user.id,
          PropertyId: property.id,
        },
      });
      let status = 200;
      if (created) {
        status = 201;
      }
      res.status(status).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
