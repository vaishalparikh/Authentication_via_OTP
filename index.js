const express = require("express");
const {
  PORT,
  TWILIO_NUMBER,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
} = require("./config/env");
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const app = express();

app.get("/", function (req, res) {
  sendMessage();
  res.send(
    `<div style="text-align:center; padding-top">
      <h1>Welcome To Vaishal Website</h1>
      <p>Your Message Sent Successfully.</p>
    </div>`
  );
});

const otp = () => {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i += 1) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

function sendMessage() {
  client.messages
    .create({
      body:
        "Your Verification Code is " + otp() + "." + "Do Not Share With Anyone",
      to: "+916352557648",
      from: TWILIO_NUMBER,
    })
    .then((message) => console.log(message))
    .catch((error) => {
      console.log(error);
    });
}

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
