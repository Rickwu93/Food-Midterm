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
    console.log('send-SMS');
    db.query(`SELECT * FROM menu_items;`)
      .then(data => {
        const SMSmessage = 'Customer';
          client.messages
              .create({
          body: SMSmessage,
          from: twilioNumber,
          to: customerNumber
        })
        .then(message => console.log(message.sid));
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};