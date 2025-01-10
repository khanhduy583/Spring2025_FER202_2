/*
*Demo su dung core module 'http' trong nodejs -> build: web server
*/

// khai bao module de su dung
const http = require("http");

// khai bao thong tin cau hinh cho web server
const hostname = "localhost";
const portNumber = 3000;

// khoi tao web server
const server = http.createServer((req, res) => {
    // thiet lap thong tin cho goi tinh response
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "text/html");
    res.end("<h1>Welcome to NodeJS Web Server</h1>");

});

// lang nghe cac request (client) gui toi web server
server.listen(portNumber, hostname, () => {
    console.log(`Web server running at: ${hostname}:${portNumber}`);
})