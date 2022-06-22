const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Level extends Model {
   static get tableName() {
      return 'course_levels';
   }
}

module.exports = Level;