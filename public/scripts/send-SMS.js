// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC7b9317fdb43d63d62ad4bfe863162fae';
const authToken = '23fbd11c6f1e1b647dbcab3f38736e46';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
        body: 'SMS text from ERLs, come getch-yo food!',
        from: '+12674309090',
        to: '+'
      })
      .then(message => console.log(message.sid));