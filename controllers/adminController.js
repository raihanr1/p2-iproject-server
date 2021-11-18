const { Property } = require("../models");

class Controller {
  static async postNewProperty(req, res, next) {
    try {
      let { name, describe, price, image_url, address } = req.body;
      let response = await Property.create({
        name,
        describe,
        price,
        image_url,
        address,
        status: "Active",
      });
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async putProperty(req, res, next) {
    try {
      let id = req.params.id;
      let data = await Property.findByPk(+id);
      if (!data) {
        throw {
          message: "Property not found",
        };
      }
      let { name, describe, price, image_url, address, status } = req.body;
      let response = await Property.update(
        {
          name,
          describe,
          price,
          image_url,
          address,
          status,
        },
        {
          where: {
            id: +id,
          },
        }
      );
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async patchStatusNewProperty(req, res, next) {
    try {
      let id = req.params.id;
      let { status } = req.body;
      let data = await Property.findByPk(+id);
      if (!data) {
        throw {
          message: "Property not found",
        };
      }
      let response = await Property.update(
        {
          status,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
  static async getAllProperty(req, res, next) {
    try {
      let response = await Property.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
