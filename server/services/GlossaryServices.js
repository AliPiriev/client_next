const Glossary = require('../models/Glossary')

class GlossaryServices {
   handleErrors(err) {
      return err;
   }

   async index(limit) {
      const query =  await Glossary.query().limit(limit || 100);
      return query;
   }

   async total() {
      const total = await Glossary.query().clone().count();
      return total;
   }

   async findOne(slug){
      const query = await Glossary.query().findOne({slug});
      return query;
   }
}
 
module.exports = new GlossaryServices();