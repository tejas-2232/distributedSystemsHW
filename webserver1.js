const http = require('http');

const hostname = '127.0.0.1';
const port = 2321;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World from Server One - 1 ');
});

server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
