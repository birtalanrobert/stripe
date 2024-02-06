const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
const webhook = require('./api/webhook');
const paymentIntent = require('./api/payment-intent');

const app = express();
const port = 6060;

app.use(express.json({
  verify: (req, res, buffer) => req['rawBody'] = buffer,
}));

app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('Hello World'));

app.post('/create-checkout-session', createCheckoutSession);

app.post('/webhook', webhook);

app.post('/create-payment-intent', paymentIntent);

app.listen(port, () => console.log('server listening on port', port));
