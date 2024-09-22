const BaseService = require("./base");
class AuthService extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = "user";
  }
}

module.exports = AuthService;
