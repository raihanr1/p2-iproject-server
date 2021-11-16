function hashedPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function isValidPassword(password, passDb) {
  const isValid = bcrypt.compareSync(password, passDb);
  return isValid;
}

module.exports = {
  hashedPassword,
  isValidPassword,
};
