const express = require('express');
const ContactsController = require('../controllers/ContactsController');

const router = express.Router();

router.get('/contacts', ContactsController.getAllContacts);

module.exports = router;