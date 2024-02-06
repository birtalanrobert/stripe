const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
const webhook = require('./api/webhook');
const paymentIntent = require('./api/payment-intent');
const decodeJWT = require('./auth/decodeJWT');
const setupIntent = require('./api/setup-intent');
const validateUser = require('./auth/validateUser');
const getPaymentMethods = require('./api/get-payment-method');
const updatePaymentIntent = require('./api/update-payment-intent');

const app = express();
const port = 6060;

app.use(express.json({
  verify: (req, res, buffer) => req['rawBody'] = buffer,
}));

app.use(cors({ origin: true }));

app.use(decodeJWT);

app.get('/', (req, res) => res.send('Hello World'));

app.post('/create-checkout-session', createCheckoutSession);

app.post('/webhook', webhook);

app.post('/create-payment-intent', paymentIntent);

app.post('/save-payment-method', validateUser, setupIntent);

app.get('/get-payment-methods', validateUser, getPaymentMethods);

app.put('/update-payment-intent', validateUser, updatePaymentIntent);

app.listen(port, () => console.log('server listening on port', port));
