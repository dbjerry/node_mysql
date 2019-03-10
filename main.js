var http = require('http');
var url = require('url');
<<<<<<< HEAD
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});
db.connect();
=======
var topic = require('./lib/topic');
>>>>>>> 2019-03-10 22:27

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        if(queryData.id === undefined){
            topic.home(request, response);
        } else { // 상세보기 구현부
            topic.page(request, response);
        }
    } else if(pathname === '/create'){
        topic.create(request, response);
    } else if(pathname === '/create_process'){
        topic.create_process(request, response);
    } else if(pathname === '/update'){
        topic.update(request, response);
    } else if(pathname === '/update_process'){
        topic.update_process(request, response);
    } else if(pathname === '/delete_process'){
        topic.delete_process(request, response);
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);
