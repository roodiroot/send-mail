/**
 * EMAIL_HOST
 * EMAIL_HOST_PASSWORD
 * EMAIL_HOST_USER
 * EMAIL_PORT
 */

// EMAIL_HOST EMAIL_HOST_PASSWORD EMAIL_HOST_USER EMAIL_PORT

import express from 'express';
import bodyParser from 'body-parser';

import { Mail } from './mail.js';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`Requested from ${req.hostname} <h1>HelloWorld</h1>`);
});
app.post('/mail', async (req, res) => {
  const { message } = req.body;
  res.json({ result: await Mail(message) });
});

app.listen(3000, () => {
  console.log(`Server started on PORT 3000`);
});
