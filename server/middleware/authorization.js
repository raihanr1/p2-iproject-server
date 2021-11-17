async function authorization(req, res, next) {
  try {
<<<<<<< HEAD
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
=======
  } catch (error) {}
>>>>>>> 49b6288c8eea539f68bdd137d5c456d1770d31eb
}

module.exports = { authorization };
