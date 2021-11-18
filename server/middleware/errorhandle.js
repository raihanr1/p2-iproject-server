function errorHandle(error, req, res, next) {
  console.log(error, ">>");
  if (error.name === "SequelizeValidationError") {
    res.status(400).json({ message: error.errors[0].message });
  } else if (error.message === "Verification token user") {
    res.status(401).json(error);
  } else if (error.message === "User not found") {
    res.status(404).json(error);
  } else if (error.message === "Property not found") {
    res.status(404).json(error);
  } else if (error.message === "Invalid Token") {
    res.status(400).json(error);
  } else if (
    error.message === "Email is required" ||
    error.message === "Password is required"
  ) {
    res.status(400).json(error);
  } else if (error.message === "Invalid email/password") {
    res.status(401).json(error);
  } else if (error.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({ message: "Email must be unique" });
  } else if (error.name === "JsonWebTokenError") {
    res.status(401).json({
      message: "Invalid token",
    });
  } else if (error.name === "ForeignKeyConstraintError") {
    res.status(404).json({ message: "" });
  } else if (error.message === "You are not authorized") {
    res.status(403).json({
      message: "You are not authorized",
    });
  } else {
    res.status(500).json({
      message: "Invalid Server",
    });
  }
}

module.exports = { errorHandle };
