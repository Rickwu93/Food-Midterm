// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const customerNumber = process.env.CUSTOMER_NUMBER;
console.log('accountSid: ', accountSid);
console.log('authToken: ', authToken);
console.log('twilioNumber: ', twilioNumber);
console.log('customerNumber: ', customerNumber);

// const client = require('twilio')(accountSid, authToken);

const sendCustomerSMS = function() {
  const SMSmessage = customerMessage();
  client.messages
        .create({
          body: SMSmessage,
          from: twilioNumber,
          to: customerNumber
        })
        .then(message => console.log(message.sid));
}

const sendRestaurantSMS = function() {
  const SMSmessage = restaurantMessage();
  client.messages
        .create({
          body: SMSmessage,
          from: twilioNumber,
          to: '+'
        })
        .then(message => console.log(message.sid));
}

// sendCustomerSMS();