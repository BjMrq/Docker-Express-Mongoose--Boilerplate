const sgMail = require('@sendgrid/mail');
const { sendGridSecret } = require('../config/variables');

sgMail.setApiKey(sendGridSecret);

const sender = emailClient => ({

  sendWelcomeEmail(email, name) {

    emailClient.send({
      to     : email,
      from   : 'emailcom@gmail.com',
      subject: 'Thanks for joining in!',
      text   : `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });

  },
  sendCancellationEmail(email, name) {

    emailClient.send({
      to     : email,
      from   : 'emailcom@gmail.com',
      subject: 'Thanks for joining in!',
      text   : `Goodbye, ${name}. I hope to see you back sometime soon.`
    });

  }
});

const sendEmails = sender(sgMail);

module.exports = sendEmails;

// const msgExemple = {
//   to     : 'exemple@gmail.com',
//   from   : 'exemple@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text   : 'and easy to do anywhere, even with Node.js',
//   html   : '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
