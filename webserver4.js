const http = require('http');

const hostname = '127.0.0.1';
const port = 2324;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Server Four - 4');
});

server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
