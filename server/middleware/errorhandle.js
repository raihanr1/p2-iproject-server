async function errorHandle(error, req, res, next) {
  if (error.name === "SequelizeValidationError") {
    res.status(400).json({ message: error.errors[0].message });
  } else if (
    error.message === "Email is required" ||
    error.message === "Password is required"
  ) {
    res.status(400).json(error);
  } else if (error.message === "Invalid email/password") {
    res.status(401).json(error);
  } else if (error.message === "Food not found") {
    res.status(404).json({
      message: "Food not found",
    });
  } else if (error.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({ message: error.errors[0].message });
  } else if (error.name === "JsonWebTokenError") {
    res.status(401).json({
      message: "Invalid token",
    });
  } else if (error.name === "ForeignKeyConstraintError") {
    res.status(404).json({ message: "Recipe not found" });
  } else if (error.message === "You are not authorized") {
    res.status(403).json({
      message: "You are not authorized",
    });
  } else {
    res.status(500).json();
  }
}

module.exports = { errorHandle };
