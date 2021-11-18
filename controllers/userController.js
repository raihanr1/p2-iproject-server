"use strict";
const { User } = require("../models");
const { isValidPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const { sendEmailToken } = require("../helper/mailer");
class Controller {
  static async postRegister(req, res, next) {
    try {
      let { given_name, email, password, mobile_num, address } = req.body;
      let response = await User.create({
        given_name,
        email,
        password,
        mobile_num,
        address,
        role: "Customer",
      });
      res.status(201).json({
        id: response.id,
        email: response.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async postLoginUser(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { message: "Email is required" };
      }
      if (!password) {
        throw { message: "Password is required" };
      }
      let response = await User.findOne({
        where: {
          email,
        },
      });
      if (!response) {
        throw { message: "Invalid email/password" };
      }

      let validPassword = isValidPassword(password, response.password);
      if (!validPassword) {
        throw { message: "Invalid email/password" };
      }
      if (!response.token) {
        let token = Math.ceil(Math.random() * 1000000);
        await User.update(
          {
            token,
          },
          {
            where: {
              id: response.id,
            },
          }
        );
        let successSend = await sendEmailToken(
          response.email,
          response.given_name,
          token
        );
        res.status(201).json({
          id: response.id,
        });
      }
      if (!response.payload) {
        throw { message: "Verification token user", id: response.id };
      }

      let payload = {
        id: response.id,
        email: response.email,
      };
      if (response.role === "Admin") {
      }
      let access_token = signToken(payload);
      res.status(200).json({
        access_token,
        role: response.role,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTokenGmail(req, res, next) {
    try {
      let id = req.params.UserId;
      let response = await User.findByPk(+id);
      if (!response) {
        throw {
          message: "User not found",
        };
      }
      let token = Math.ceil(Math.random() * 1000000);
      await User.update(
        {
          token,
        },
        {
          where: {
            id: +id,
          },
        }
      );
      let successSend = await sendEmailToken(
        response.email,
        response.given_name,
        token
      );
      res.status(200).json({
        id: response.id,
      });
    } catch (error) {
      next(error);
    }
  }

  static async validasiPayload(req, res, next) {
    try {
      let { id, payload } = req.body;
      let user = await User.findByPk(+id);
      if (!user) {
        throw {
          message: "User not found",
        };
      }
      if (user.token !== payload) {
        throw {
          message: "Invalid Token",
        };
      }

      let response = await User.update(
        {
          payload,
        },
        {
          where: {
            id,
          },
        }
      );
      let payloadToken = {
        id: user.id,
        email: user.email,
      };
      console.log(payloadToken, ">>> ");
      let access_token = signToken(payloadToken);
      res.status(200).json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
