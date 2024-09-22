module.exports = (appInfo) => {
  const config = (exports = {});

  config.keys = appInfo.name + "_1720524960111_3666";

  config.middleware = [];
  config.jwt = {
    secret: "myjsonsecret",
    tokenExpireTime: 60, //Each hour is 3600 seconds, this time is 60s
  };
  const userConfig = {
    security: {
      csrf: false,
    },
    mysql: {
      client: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "market",
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
