const express = require('express');
const ContactsController = require('../controllers/ContactsController');
const validateContact = require('../middlewares/validationContact');

const router = express.Router();
const PATHWITHID = '/contacts/:id';

router.get('/contacts', ContactsController.getAllContacts);
router.get(PATHWITHID, ContactsController.getById);
router.post('/contacts', validateContact, ContactsController.createContact);
router.put(PATHWITHID, validateContact, ContactsController.updateContact);
router.delete(PATHWITHID, ContactsController.deleteContact);

module.exports = router;