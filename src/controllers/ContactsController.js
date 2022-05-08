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

const getById = async (req, res) => { 
  try {
    const { id } = req.params;
    const contacts = await ContactsServices.getById(id);
    if (contacts !== null) {
      return res.status(200).json(contacts);
    }
    return res.status(404).json({ error: 'no contact in Database with this id' });   
    } catch (err) {
    res.status(500).json({ error: err.message });   
  }
};

const deleteContact = async (req, res) => { 
  try {
    const { id } = req.params;
    const deletedContact = await ContactsServices.deleteContact(id);
    if (deletedContact === 'OK') {
      return res.status(200).json({ message: 'User Deletado com sucesso' });
    }
    return res.status(404).json({ error: 'no contact in Database with this id' });   
    } catch (err) {
    res.status(500).json({ error: err.message });   
  }
};

const createContact = async (req, res) => { 
  try {
    const contactData = req.body;
    const id = await ContactsServices.createContact(contactData);

      return res.status(201).json({ id, contactData });
    } catch (err) {
    res.status(500).json({ error: err.message });   
  }
};

module.exports = { 
  getAllContacts,
  createContact,
  getById,
  deleteContact,
};