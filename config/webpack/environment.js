const { environment } = require('@rails/webpacker');
const { resolve } = require('path');

environment.config.merge({
  resolve: {
    alias: {
      '@material-ui/styles': resolve(
        'node_modules',
        '@material-ui/styles'
      ),
      '@material-ui/core': resolve(
        'node_modules',
        '@material-ui/core'
      ),
    },
  },
});

module.exports = environment;
