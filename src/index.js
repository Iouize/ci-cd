const express = require('express');
const auth = require('./modules/authentication');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
    // Ligne de test à rajouter
  console.log("test");  // <- cette ligne va déclencher ESLint
});

app.get('/auth/:secret', (req, res) => {
  const { secret } = req.params;
  const response = auth(secret);

  res.status(response.status).send(response.message);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on http://localhost:${port}`);
});
