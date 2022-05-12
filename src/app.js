const express = require('express');

const app = express();
app.use(express.json());

const ContactsRouters = require('./routes/contactsRoutes');

app.use(ContactsRouters);

module.exports = app;