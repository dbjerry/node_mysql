var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '#db#jerry#91',
    database : 'opentutorials'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log('error');
    }
    console.log('\n******************* result ********************\n',results, '\n\n***********************************************\n');
});

connection.end();
