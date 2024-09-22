const { Service } = require("egg");

class BaseService extends Service {
  async select(entity) {
    return await this.app.mysql.select(entity);
  }
  async create(entity) {
    return await this.app.mysql.insert(this.entity, entity);
  }

  async update(entity) {
    return await this.app.mysql.update(this.entity, entity);
  }
}

module.exports = BaseService;
