const SimplePageServices = require('../services/SimplePageServices');


class SimplePageController {
   async findOne(req,res) {
      const {slug} = req.params;
      try {
         const page = await SimplePageServices.findOne(slug);
         res.status(200).json(page);
      } catch (e) {
         console.log(e);
         res.status(400).json(e);
      }
   }
}

module.exports = new SimplePageController();
