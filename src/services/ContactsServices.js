const { Contact, Email, Phone } = require('../models');

const getAllContacts = async () => {
    const post = await Contact.findAll({ 
      include: [
        { model: Email, as: 'emails', attributes: { exclude: ['id', 'contactId'] } }, 
        { model: Phone, as: 'phones', attributes: { exclude: ['id', 'contactId'] } },
      ],
    });
 return post;
};

module.exports = {
  getAllContacts,
};