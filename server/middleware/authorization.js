const { User } = require("../models");

async function authorization(req, res, next) {
  try {
    let response = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    if (response.role !== "Admin") {
      throw {
        message: "You are not authorized",
      };
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };
