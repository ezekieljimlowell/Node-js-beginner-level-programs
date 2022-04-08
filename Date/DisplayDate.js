const http = require("http");
const date = require('./Date');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Current date and time is:" + date.currentDate())
    res.end();
}).listen(8080)