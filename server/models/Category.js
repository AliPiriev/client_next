const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Category extends Model {
   static get tableName() {
      return 'categories';
   }
}

module.exports = Category;