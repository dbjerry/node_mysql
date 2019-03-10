var mysql = require('mysql');

var db = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});
db.connect();

// 꺼낼 api가 하나라면,
module.exports = db;

/*
여러개를 꺼낼 땐,
exports만 기재한다.
 */
