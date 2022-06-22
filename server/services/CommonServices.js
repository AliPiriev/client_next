
class CommonServices {
   constructor(model) {
      this.Model = require(`../models/${model}`);
   }

   handleErrors(err) {
      return err;
   }

   async index() {
      const data = await this.Model.query();
      return data;
   }

   async findFirst() {
      const data = await this.Model.query().first();
      return data;
   }
}

module.exports = CommonServices;