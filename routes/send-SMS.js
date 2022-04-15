const express = require('express');
const router  = express.Router();

// Twilio
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const customerNumber = process.env.CUSTOMER_NUMBER;
const restaurantNumber = process.env.RESTAURANT_NUMBER;
const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {
  console.log(db);

  router.post("/", (req, res) => {
    const customerMessage = req.body['customer'];
    const restaurantMessage = req.body['restaurant'];

    client.messages
  .create({
     body: customerMessage,
     from: twilioNumber,
     to: customerNumber
   })
  .then(message => console.log(message.sid));

  client.messages
  .create({
     body: restaurantMessage,
     from: twilioNumber,
     to: restaurantNumber
   })
  .then(message => console.log(message.sid));
  });

  return router;
};