const { router: healthRouter } = require('./health.route');
const { router: loginRouter } = require('./login.route');
const { router: registerRouter } = require('./register.route');
const { router: logoutRouter } = require('./logout.route');
const { router: authRouter } = require('./auth.route');

module.exports = {
  healthRouter,
  loginRouter,
  registerRouter,
  logoutRouter,
  authRouter,
};
