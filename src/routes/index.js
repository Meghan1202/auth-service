const { router: healthRouter } = require('./health.route');
const { router: loginRouter } = require('./login.route');
const { router: authRouter } = require('./auth.route');

module.exports = {
  healthRouter,
  loginRouter,
  authRouter,
};
