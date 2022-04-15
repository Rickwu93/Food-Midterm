const express = require('express');
const router  = express.Router();

// Twilio
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const customerNumber = process.env.CUSTOMER_NUMBER;
const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {

  router.post("/", (req, res) => {
    client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: twilioNumber,
     to: customerNumber
   })
  .then(message => console.log(message.sid));

  client.messages
  .create({
     body: 'Restaurant Text',
     from: twilioNumber,
     to: customerNumber
   })
  .then(message => console.log(message.sid));
  });
  return router;
};