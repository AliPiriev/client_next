const GlossaryServices = require('../services/GlossaryServices');

class GlossaryController { 
	async index(req,res){
      const {limit} = req.query;
		try{
			const glossaries = await GlossaryServices.index(limit);
			res.status(200).json(glossaries);
		}catch(e){
			console.log(e);
         res.status(400).json(e);
		} 
	}

   async total(req,res){
		try{
			const total = await GlossaryServices.total();
			res.status(200).json(total);
		}catch(e){
			console.log(e);
         res.status(400).json(e);
		} 
	}

   async findOne(req, res){
      try{
         const glossary = await GlossaryServices.findOne(req.params.slug);
         res.status(200).json(glossary);
      }catch(e){
         console.log(e);
         res.status(400).json(e);
      }
   }
} 
 
module.exports = new GlossaryController();