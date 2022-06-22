const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Pages extends Model {
   static get tableName() {
      return 'front_pages';
   }
}

module.exports = Pages;