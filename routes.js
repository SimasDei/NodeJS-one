const fileSystem = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Node Js Basics</title>');
    res.write('<head>');
    res.write('<body>');
    res.write(
      '<form action="/message" method="POST"><input name="message" type="text" placeholder="Type Something" /> <button type="submit">Press Me!</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fileSystem.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

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
};

module.exports = requestHandler;
