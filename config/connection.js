//Setting up mySQL connection with the help of dotenv to hide the important informations
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
  });

  //making connections

  connection.connect(function(err) {
      if(err) {
          console.error('Error connecting: ' + err.stack);
          return;
      }
      console.log("connected as id " + connection.threadId);
  });

  //exporting connection for our ORM to use
  module.exports = connection;