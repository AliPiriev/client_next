const CommonServices = require('../services/CommonServices');

class CommonController {
   constructor(model) {
      this.Services = new CommonServices(model);
      this.index = this.index.bind(this);
      this.findFirst = this.findFirst.bind(this);
   }

   async index(req, res) {
      try {
         let data = await this.Services.index(req);
         res.status(200).json(data);
      } catch (e) {
         let errors = this.Services.handleErrors(e);
         res.status(400).json({ errors });
      }
   }

   async findFirst(req, res) {
      try {
         let data = await this.Services.findFirst();
         res.status(200).json(data);
      } catch (e) {
         let errors = this.Services.handleErrors(e);
         res.status(400).json({ errors });
      }
   }

}

module.exports = CommonController;

