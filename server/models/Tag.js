const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Tag extends Model {
   static get tableName() {
      return 'tags';
   }
}

module.exports = Tag;