const axios = require("axios");

class Controller {
  static async postCreateFixedVirtualAccount(req, res) {
    try {
      let { bank_code, name } = req.body;
      let response = await axios({
        method: "post",
        url: "https://api.xendit.co/callback_virtual_accounts",
        data: {
          external_id: `VA_fixed-${new Date().getTime()}`,
          bank_code,
          name,
        },
        auth: {
          username: `${process.env.PRIVATE_KEY_XENDIT}`,
          password: "password",
        },
      });
      res.send(response.data);
    } catch (error) {
      res.json(error);
      console.log(error, ">>>");
    }
  }

  //   router.get("/VA_ACC", async (req, res) => {
  //     try {
  //       // Check VA
  //       let response = await axios({
  //         method: "get",
  //         url: `https://api.xendit.co/callback_virtual_accounts/61939d5ef932ce65c128517c`,
  //         auth: {
  //           username: `${process.env.PRIVATE_KEY_XENDIT}`,
  //           password: "password",
  //         },
  //       });
  //       res.send(response.data);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   });

  //   router.get("/VA_BANK", async (req, res) => {
  //     try {
  //       let response = await axios({
  //         method: "get",
  //         url: "https://api.xendit.co/available_virtual_account_banks",
  //         auth: {
  //           username: `${process.env.PRIVATE_KEY_XENDIT}`,
  //           password: "password",
  //         },
  //       });
  //       res.send(response.data);
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   });
}

module.exports = Controller;
