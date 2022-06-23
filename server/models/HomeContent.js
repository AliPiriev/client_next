const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class HomeContent extends Model {
   static get tableName() {
      return 'home_contents';
   }
}

module.exports = HomeContent;