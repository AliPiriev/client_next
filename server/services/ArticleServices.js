const Article = require('../models/Article')

class ArticleServices {
   handleErrors(err) {
      return err;
   }

   async index(category, level, tag, limit, page, id_not) {
      console.log(tag)
      let query =  await Article.query().where((item) => {
         if(category && Array.isArray(category)){
            item.whereIn('category', category)
         }else if(category){
            item.whereIn('category', [category])
         }

         if(level && Array.isArray(level)){
            item.whereIn('level', level)
         }else if(level){
            item.whereIn('level', [level])
         }

         // if(tag && Array.isArray(tag)){
         //    item.whereIn('tags', ['2'])
         // }else if(tag){
         //    console.log(tag)
         //    item.whereIn('tags', ['2'])
         // }


         if(id_not){
            item.whereNot('id', id_not)
         }

         item.where('status', 1);

      }).page((page - 1 )|| 0 , limit || 10);

      return query;
   }

   async findOne(slug){
      const article = await Article.query().findOne({slug});
      return article;
   }
}
 
module.exports = new ArticleServices();