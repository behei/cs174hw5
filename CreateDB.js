var mysql = require('mysql');

var connection = mysql.createConnection({
	host : "127.0.0.1",
	user : "root",
	password: "",
	database: "test_database_node"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE IF NOT EXISTS users", function (err, result) {
    if (err) throw err;
    console.log("Database created");

  });
  var sql = "CREATE TABLE IF NOT EXISTS USER (ID INT AUTO_INCR EMENT PRIMARY KEY NOT NULL, EMAIL TEXT, LAST_CHECK_IN INT (11) NOT NULL DEFAULT '0', LAST_EMAIL_SENT INT (11) NOT NULL DEFAULT '0', NOTIFY_LIST TEXT, MESSAGE TEXT)";
  connection.query(sql, function(err, result){
  	if (err) throw err;
  	console.log('TABLE CREATED');
  });
});