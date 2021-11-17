const { getPayload } = require("../helper/jwt");
const { User } = require("../models");
async function authentication(req, res, next) {
  try {
    let token = req.headers.access_token;
    let payload = getPayload(token);
    let response = await User.findOne({
      where: {
        email: payload.email,
      },
    });
    if (!response) {
      throw {
        message: "You are not authorized",
      };
    }
    req.user = {
      id: payload.id,
      email: payload.email,
    };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authentication };
