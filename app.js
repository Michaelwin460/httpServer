const http = require('http')
const url = require('url')
const fs = require('fs')
const [...contacts] = require('./contacts')
const factor = require('./comps/factorial')
const findPrime = require('./comps/primes')

http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const pathName = q.pathname
    const endPoint = pathName.includes('files' || 'pages')? 'html' : 'js'
    let N = pathName.slice(pathName.length - 1)
    console.log(N);
    console.log(factor.factor(10));


    fs.readFile(`.${pathName}.${endPoint}`, function(err, data) {
        if (pathName === '/pages'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        }
        if (pathName === '/pages/about'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        }
        if (pathName === '/pages/sports'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        } 
        if (pathName === '/files'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        } 
        if (pathName === '/files/shopes'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        }
        if (pathName === '/files/people'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end(); 
        }
        if (pathName === '/contacts'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            contacts.forEach(element => {
                res.write(` name: ${element.name}, address: ${element.address} `)
            });
            return res.end();
        }
        if (pathName === `/contacts/${N}`) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(`name: ${contacts[N].name}, address: ${contacts[N].address}`)
            return res.end();
        }
        if (pathName === `/comps/factorial/${N}`) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(factor.factor(N).toString())
            return res.end();
        }
        if (pathName === `/comps/primes/${N}`) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(findPrime.findPrime(N).toString())
            return res.end();
        }
          if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
      });

}).listen(8080);