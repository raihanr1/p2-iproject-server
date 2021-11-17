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
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "realestatemaulanagroup@gmail.com",
          pass: "MaulanaGroup", // naturally, replace both with your real credentials or an application-specific password
        },
      });

      const mailOptions = {
        from: "realestatemaulanagroup@gmail.com",
        to: "raihanrobbani3@gmail.com",
        subject: "Invoices due",
        text: "Dudes, we really need your money. browww!!!!",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
