const { getPayload } = require("../helper/jwt");

async function authentication(req, res, next) {
  try {
    let token = req.headers.access_token;
    let payload = getPayload(token);
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
