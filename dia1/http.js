const http = require('http')

http.createServer(function(req,res){
    console.log('servidor activo')
    console.log(req.url)
    switch(req.url){
        case '/':
            res.write('<h1>MI PRIMER SERVIDOR CON NODEJS</h1>')
            break;
        case '/login':
            res.write('<h1>LOGIN</h1>')
            break;
        default:
            res.write('<h1>PAGINA NO ENCONTRADA</h1>')
    }
    
    res.end()
}).listen(5000)