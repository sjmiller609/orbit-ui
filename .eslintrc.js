// .eslintrc.js
const { Neutrino } = require('neutrino');

// Specify middleware to Neutrino prior to calling eslintrc.
// You can choose to not use .neutrinorc.js as the middleware to
// use if you prefer, specifying any middleware you wish.
module.exports = Neutrino({ root: __dirname })
  .use('@neutrinojs/airbnb', {
    eslint: {
      rules: { semi: 'off' }
    }
  })
  .use('@neutrinojs/react')
  .call('eslintrc');
