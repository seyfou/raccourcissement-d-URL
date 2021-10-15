const nodemailer = require("nodemailer");
require("dotenv").config({path:"./.env"});

const user = process.env.user;
const pass =  process.env.pass;

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    console.log(user);
    console.log(pass);
    console.log(name);
    console.log(email);
    console.log(confirmationCode);
    
    const transport = nodemailer.createTransport({
      service: "Gmail",
      host: 'smtp.ethereal.email',
      port: 465,
      secure: true,  // use SSL
      auth: {
        user: user,
        pass: pass,
      },
    });

    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
  };