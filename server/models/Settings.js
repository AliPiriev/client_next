const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Settings extends Model {
   static get tableName() {
      return 'general_settings';
   }
}

module.exports = Settings;