const http = require('http')

http.createServer(function(req,res){
    console.log('servidor activo')
    res.write('<h1>MI PRIMER SERVIDOR CON NODEJS</h1>')
    res.end()
}).listen(5000)