const SimplePageServices = require('../services/SimplePageServices');


class SimplePageController {
   async index (req, res) {
      try {
         const pages = await SimplePageServices.index();
         res.status(200).json(pages);
      } catch (e){
         res.status(400).json(e);
      }
   }

   async findOne(req,res) {
      const {slug} = req.params;
      try {
         const page = await SimplePageServices.findOne(slug);
         res.status(200).json(page);
      } catch (e) {
         res.status(400).json(e);
      }
   }
}

module.exports = new SimplePageController();
