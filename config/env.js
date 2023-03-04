require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  TWILIO_ACCOUNT_SID: process.env.ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.AUTH_TOKEN,
  TWILIO_NUMBER : process.env.TWILIO_NUMBER,
};
