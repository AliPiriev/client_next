const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Glossary extends Model {
   static get tableName() {
      return 'glossary';
   }
}

module.exports = Glossary;