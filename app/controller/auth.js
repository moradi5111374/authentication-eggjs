const BaseController = require("./base");

class AuthCtrl extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = "auth";
  }
}

module.exports = AuthCtrl;
