require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const ContactsRouters = require('./src/routes/contactsRoutes');

app.use(ContactsRouters);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));

