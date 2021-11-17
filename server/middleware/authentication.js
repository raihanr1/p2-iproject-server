<<<<<<< HEAD
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
=======
async function authentication(req, res, next) {
  try {
  } catch (error) {}
>>>>>>> 49b6288c8eea539f68bdd137d5c456d1770d31eb
}

module.exports = { authentication };
