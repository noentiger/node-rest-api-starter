// used to store config

const config = {
  APP_NAME: 'BASE',
  DATABASE: process.env.MONGODB_URI || 'mongodb://localhost/database',
  SECRET: 'iLOVEmyPASSWORD', // jwt secret
  CLIENT_TOKEN_EXPIRES_IN: 24 * 60 * 60,
  EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,

  EMAIL_SENDER: { // used to send mail by nodemailer
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    }
  },

  USER_MESSAGE: { // message sent to client
    MAIL_SENT: 'Mail sent',
    NAME_TAKEN: 'Name or email has been taken',
    USER_NOT_FOUND: 'User not found',
    WRONG_PASSWORD: 'Wrong password',
    LOGIN_SUCCESS: 'Enjoy your token!',
    NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
  },

}

export default config
