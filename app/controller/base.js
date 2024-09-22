const { Controller } = require("egg");

const Joi = require("joi");
const HttpStatus = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Helpers = require("../helper/helpers");

class BaseCtrl extends Controller {
  success(data) {
    this.ctx.body = { code: 0, message: "Create User", data };
  }
  error(error) {
    this.ctx.body = { code: 1, error };
  }
  async RegisterUser() {
    const { ctx, service } = this;
    let user = ctx.request.body;
    const body = {
      username: Helpers.firstUpper(user.username),
      password: user.password,
    };
    let result = await service[this.entity].create(body);
    result.affectedRows === 1
      ? this.success(body)
      : this.error("Opssssss, This is a bugggggggg");

    // return bcrypt.hash(user.password, 10, (err, hash) => {
    //   if (err) {
    //     return (ctx.body = {
    //       code: HttpStatus.StatusCodes.BAD_REQUEST,
    //       data: { msg: "Error hashing password" },
    //     });
    //   }
    //   const body = {
    //     username: Helpers.firstUpper(user.username),
    //     password: hash,
    //   };
    //   service.auth
    //     .create(body)
    //     .then((user) => {
    //       ctx.body = {
    //         code: HttpStatus.StatusCodes.CREATED,
    //         data: { msg: "اکانت مورد نظر ساخته شد", user },
    //       };
    //     })
    //     .catch((err) => {
    //       ctx.body = {
    //         code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
    //         data: { msg: err },
    //       };
    //     });
    // });
  }

  async LoginUser() {
    const { ctx, service, app } = this;
    const { username, password } = ctx.request.body;
    const token = jwt.sign(
      {
        username,
        exp: Math.floor(Date.now() / 1000) + app.config.jwt.tokenExpireTime,
      },
      app.config.jwt.secret
    );
    ctx.body = { token };

    // let users = await service.auth.select("user");
    // let username = Helpers.firstUpper(ctx.request.body.username);
    // let findUser = users.filter((user) => user.username === username);
    // // ----------- Save token in Db
    // let user = {
    //   id: findUser[0].id,
    //   username: findUser[0].username,
    //   password: findUser[0].password,
    //   token: "sdlkfjlsjflksdjklfjlksjflksdjl",
    // };
    // let result = await service.auth.update(user);
    // ctx.locals.token = token;
    // console.log("first", result);
  }

  async Protected() {
    const { ctx } = this;
    const token = ctx.locals.token;
    ctx.body = "Protected route accessed!";
  }
}

module.exports = BaseCtrl;
