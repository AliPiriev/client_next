const ArticleServices = require('../services/ArticleServices');

class ArticleController { 
	async index(req,res){
      const {category, level, tag, limit, page, id_not} = req.query;
		try{
			const articles = await ArticleServices.index(category, level, tag, limit, page, id_not);
			res.status(200).json(articles);
		}catch(e){
			console.log(e);
         res.status(400).json(e);
		} 
	}

   async findOne(req, res){
      try{
         const article = await ArticleServices.findOne(req.params.slug);
         res.status(200).json(article);
      }catch(e){
         console.log(e);
         res.status(400).json(e);
      }
   }
} 
 
module.exports = new ArticleController();