const nodemailer = require("nodemailer");

async function sendEmailToken(email, name, token) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "realestatemaulanagroup@gmail.com",
    to: email,
    subject: "Access Token",
    text: `Hello ${name}! This is your token for authorization the website. Your token: ${token}`,
  };

  let response = await transporter.sendMail(mailOptions);
  return response;
}

module.exports = { sendEmailToken };
