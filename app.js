const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('I am in the middleware!');
  next();
});

app.use((req, res, next) => {
  console.log('anotha one !');
  res.send();
});

app.listen(3000);
