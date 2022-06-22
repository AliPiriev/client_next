const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Article extends Model {
   static get tableName() {
      return 'blogs';
   }
}

module.exports = Article;