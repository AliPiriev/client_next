const Pages = require('../models/Pages')

class SimplePageServices {
   handleErrors(err) {
      return err;
   }

   async index() {
      const pages = await Pages.query();
      return pages;
   }

   async findOne(slug) {
      const page = await Pages.query().findOne({slug});
      return page;
   }

}
 
module.exports = new SimplePageServices(); 