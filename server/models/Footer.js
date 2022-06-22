const { Model } = require('objection');
const knex = require("../db/knex.js");
Model.knex(knex);

class Footer extends Model {
   static get tableName() {
      return 'footer_widgets';
   }
}

module.exports = Footer;