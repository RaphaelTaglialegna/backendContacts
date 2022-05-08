const ContactsServices = require('../services/ContactsServices');

const getAllContacts = async (req, res) => { 
  try {
    const contacts = await ContactsServices.getAllContacts();
    if (contacts !== null) {
      return res.status(200).json(contacts);
    }
    return res.status(400).json({ error: 'no contacts in Database' });   
    } catch (err) {
    res.status(500).json({ error: err.message });   
  }
};

module.exports = { 
  getAllContacts,
};