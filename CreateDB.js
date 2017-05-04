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
  connection.query("CREATE DATABASE IF NOT EXISTS test_database_node", function (err, result) {
    if (err) throw err;
    console.log("Database created");

  });
  var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function(err, result){
  	if (err) throw err;
  	console.log('TABLE CREATED');
  });
});