const axios = require("axios");
const { Property, Transaction } = require("../models");

class Controller {
  static async postCreateFixedVirtualAccount(req, res) {
    try {
      let { bank_code, name } = req.body;
      let bookMark = await BookMark.findAll({
        include: {
          model: Property,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          id: req.params.book_mark_id,
        },
      });
      let response = await axios({
        method: "post",
        url: "https://api.xendit.co/callback_virtual_accounts",
        data: {
          external_id: `VA_fixed-${new Date().getTime()}`,
          bank_code,
          name,
          is_closed: true,
          expected_amount: bookMark.Property.price,
        },
        auth: {
          username: `${process.env.PRIVATE_KEY_XENDIT}`,
          password: "password",
        },
      });
      let { id, external_id, account_number, status } = response.data;
      let created = {
        id_FVA: +id,
        external_id,
        status,
        UserId: req.user.id,
        PropertyId: transactionUser[0].Property.id,
        account_number,
      };
      let transaction = await Transaction.create(created);
      res.status(201).json(response.data);
    } catch (error) {
      next(error);
    }
  }

  static async listAvailableBankFVA(req, res, next) {
    try {
      let response = await axios({
        method: "get",
        url: `https://api.xendit.co/available_virtual_account_banks`,
        auth: {
          username: `${process.env.PRIVATE_KEY_XENDIT}`,
          password: "password",
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  }

  static async createInvoiceWithFVA(req, res) {
    try {
      let id = req.params.book_mark_id;
      let bookMark = await BookMark.findAll({
        include: {
          model: Property,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: {
          id: req.params.book_mark_id,
        },
      });
      let user = await User.findOne({
        where: {
          email: req.user.email,
        },
      });
      let transactionUser = await Transaction.findOne({
        where: {
          UserId: user.id,
          PropertyId: bookMark.Property.id,
        },
      });
      let { external_id } = transactionUser;
      let response = await axios({
        method: "post",
        url: "https://api.xendit.co/v2/invoices",
        data: {
          external_id,
          callback_virtual_account_id: transactionUser.account_number,
          amount: transactionUser.Property.price,
          description: `Invoice for Maulana group property transaction, you can payment this ${bookMark.Property.name}`,
          should_send_email: "true",
          customer: {
            given_names: user.given_name,
            mobile_number: user.mobile_num,
            email: user.email,
            address: user.address,
          },
        },
        auth: {
          username: `${process.env.PRIVATE_KEY_XENDIT}`,
          password: "password",
        },
      });
      res.status(201).json({
        invoice_url: response.data.invoice_url,
      });
    } catch (error) {
      next(error);
    }
  }

  static async virtualAccountPayment(req, res, next) {
    try {
      let id = req.params.transaction_id;
      let transactionUser = await Transaction.findOne({
        include: {
          model: Property,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        where: {
          id,
        },
      });
      let response = await axios({
        method: "post",
        url: "https://api.xendit.co/pool_virtual_accounts/simulate_payment",
        data: {
          bank_code: transactionUser.bank_code,
          bank_account_number: transactionUser.account_number,
          transfer_amount: transactionUser.Property.price,
        },
        auth: {
          username: `${process.env.PRIVATE_KEY_XENDIT}`,
          password: "password",
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
