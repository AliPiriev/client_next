const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host :  dbConfig.HOST,
    port : 3306,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
    socketPath: dbConfig.SOCKETPATH
  }
});


module.exports = knex;




module.exports = {
   HOST: "localhost",
   USER: "root",
   PASSWORD: "root",
   DB: "academy",
   SOCKETPATH: '/Applications/MAMP/tmp/mysql/mysql.sock'
 };

