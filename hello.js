const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const server =  http.createServer((req, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World\n");
})

server.listen(port, hostName, () => {
    console.log(`Server running in ${hostName} ${port}`)
})

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);

