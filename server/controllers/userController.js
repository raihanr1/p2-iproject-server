"use strict";
const { User } = require("../models");
const nodemailer = require("nodemailer");
const { isValidPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
// const SMTPServer = require("smtp-server").SMTPServer;

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
      res.redirect("/user/test");
      //   next(error);
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
      let validPassword = isValidPassword(password, response.password);
      if (!response || !validPassword) {
        throw { message: "Invalid email/password" };
      } else {
        let payload = {
          id: response.id,
          email: response.email,
        };
        let access_token = signToken(payload);
        res.status(200).json({
          access_token,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async sendEmailToken(req, res, next) {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: "raihanrobbani3@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
