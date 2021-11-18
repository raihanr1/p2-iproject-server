const jwt = require("jsonwebtoken");

function signToken(payload) {
  const token = jwt.sign(payload, "raihanlulusp2amin");
  return token;
}

function getPayload(token) {
  let payload = jwt.verify(token, "raihanlulusp2amin");
  return payload;
}

module.exports = {
  signToken,
  getPayload,
};
