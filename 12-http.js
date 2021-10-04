const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url === '/' ) {
        res.end('Welcome to our homepage')
    }
    
    if(req.url == '/about') {
        res.end('this is our about page')
    }

    res.end(`<h1>Ooops!</h1>
    <p>Sorry, I can't find the page you are looking for</p>
    <a href="/">click here to go home</a>`)
    
})

server.listen(5000);