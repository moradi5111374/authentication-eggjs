module.exports = (app) => {
  const { router, controller } = app;
  router.post("/register", controller.auth.RegisterUser);
  router.post("/login", controller.auth.LoginUser);
  router.get("/protected", app.middleware.auth(), controller.auth.Protected);
};
