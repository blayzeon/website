const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const USER = KFC_USER;
const PASSWORD = KFC_PASSWORD;
const path = require("path");
require("dotenv").config();

// instantiate an express app
const app = express();
app.use(express.static("public"));

//make the contact page the the first page on the app
app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

//port will be 8000 for testing
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

const transporter = nodemailer.createTransport({
  // IMAP: 993
  // oSMTP: 465
  host: "mail.katesfishcamp.com",
  port: 465,
  secure: true,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// POST route
app.post("/send", (req, res) => {
  //1. Accepts the form data submitted and parse it using multiparty.
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    //2. After parsing it, create a mail object with from, to, subject and text properties.
    /* const mail = {
      from: data.name,
      to: process.env.EMAIL,
      subject: data.subject,
      text: `${data.name} <${data.email}> \n${data.message}`,
    };*/

    const mail = {
      from: USER, // can only be send from the server
      to: USER,
      subject: "Camping Inquiry",
      text: data.email,
    };

    //3. Use transporter.sendMail() to send the email and done.
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});
