async function authorization(req, res, next) {
  try {
    let userId = req.user.id;
    // let data = await Food.findAll({
    //   where: {
    //     userId,
    //   },
    // });
    if (data.length) {
      next();
    } else {
      throw {
        message: "You are not authorized",
      };
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };
