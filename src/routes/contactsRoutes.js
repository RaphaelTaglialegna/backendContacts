const express = require('express');
const ContactsController = require('../controllers/ContactsController');

const router = express.Router();

router.get('/contacts', ContactsController.getAllContacts);
router.get('/contacts/:id', ContactsController.getById);
router.post('/contacts', ContactsController.createContact);
router.patch('/contacts/:id', ContactsController.createContact);
router.delete('/contacts', ContactsController.createContact);

module.exports = router;