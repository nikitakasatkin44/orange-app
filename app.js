'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const path = __dirname + '/';

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});

app.use("/", router);
app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.status(200).send('Hello, Nicks world!').end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
