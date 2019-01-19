const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Node Js Basics</title>');
  res.write('<head>');
  res.write('<body>');
  res.write('<h1>Aww Jeez, Rick!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
  // process.exit();
});

server.listen(3000);
