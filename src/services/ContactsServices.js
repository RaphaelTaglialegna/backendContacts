const { Contact, Email, Phone } = require('../models');

const getAllContacts = async () => {
    const result = await Contact.findAll({ 
      include: [
        { model: Email, as: 'emails', attributes: { exclude: ['id', 'contactId'] } }, 
        { model: Phone, as: 'phones', attributes: { exclude: ['id', 'contactId'] } },
      ],
    });
 return result;
};

const getById = async (id) => {
  const result = await Contact.findOne({ 
    include: [
      { model: Email, as: 'emails', attributes: { exclude: ['id', 'contactId'] } }, 
      { model: Phone, as: 'phones', attributes: { exclude: ['id', 'contactId'] } },
    ],
    where: { id } });
return result;
};

const deleteContact = async (id) => {
  const result = await Contact.findOne({ 
    include: [
      { model: Email, as: 'emails', attributes: { exclude: ['id', 'contactId'] } }, 
      { model: Phone, as: 'phones', attributes: { exclude: ['id', 'contactId'] } },
    ],
    where: { id } });
return result;
};

const createContact = async (contactData) => {
  const { firstName, lastName, cpf, emails, phones } = contactData;

  const { id } = await Contact.create({ firstName, lastName, cpf });
  if (emails.length !== 0) { 
     await Promise.all(emails.map(async ({ email }) => { 
      await Email.create({ contactId: id, email });
    }));
  }
  await Promise.all(phones.map(async ({ phone }) => { 
    await Phone.create({ contactId: id, phone });
  }));
return id;
};

module.exports = {
  getAllContacts,
  createContact,
  getById,
  deleteContact,
};