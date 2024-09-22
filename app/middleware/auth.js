const jwt = require("jsonwebtoken");

module.exports = () => {
  return async function auth(ctx, next) {
    const token = ctx.header.authorization;
    if (!token) {
      ctx.status = 401;
      ctx.body = "Unauthorized";
      return;
    }

    try {
      const decoded = jwt.verify(token, ctx.app.config.jwt.secret);
      ctx.state.user = decoded;
    } catch (err) {
      ctx.status = 401;
      ctx.body = "Token invalid";
      return;
    }

    // const decoded = jwt.verify(token, ctx.app.config.jwt.secret);
    // if (decoded.exp && decoded.exp > Math.floor(Date.now() / 1000)) {
    //   // Token is not expired
    // } else {
    //   // Token is expired
    // }

    await next();
  };
};
