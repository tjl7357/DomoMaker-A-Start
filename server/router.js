// Requires
const controllers = require('./controllers');

// Create the Router Function
const router = (app) => {
  // Login Routes
  app.get('/login', controllers.Account.loginPage);
  app.post('/login', controllers.Account.login);

  // Signup Routes
  app.get('/signup', controllers.Account.signupPage);
  app.post('/signup', controllers.Account.signup);

  // Logout Routes
  app.get('/logout', controllers.Account.logout);

  // Maker Routes
  app.get('/maker', controllers.Domo.makerPage);
  app.post('/maker', controllers.Domo.makeDomo);

  // Default Route
  app.get('/', controllers.Account.loginPage);
};

// exports
module.exports = router;
