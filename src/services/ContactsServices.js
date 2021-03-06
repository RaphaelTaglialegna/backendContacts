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
      { model: Email, as: 'emails', attributes: { exclude: ['contactId'] } }, 
      { model: Phone, as: 'phones', attributes: { exclude: ['contactId'] } },
    ],
    where: { id } });
return result;
};

const deleteContact = async (id) => {
  const checkId = getById(id);
  if (checkId.length === 0) { 
    return null;
  }
  await Contact.destroy({ where: { id } });
  return 'OK';
};

const checkContactExists = async (cpf) => {
  const result = await Contact.findOne({ where: { cpf } });
  
  return result;
};

const createContact = async (contactData) => {
  const { firstName, lastName, cpf, emails, phones } = contactData;
  
  const checkContact = await checkContactExists(cpf);
  if (checkContact) { 
    throw new Error('User already exists!');
  } 
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

const updadeEmails = async (emails, idContact) => { 
  await Promise.all(emails.map(async ({ email, id }) => {
    if (id === undefined) { 
      await Email.create({ contactId: idContact, email });
    } else { 
      await Email.update({ email }, { where: { id } });
    }
 }));
};

const updadePhones = async (phones, idContact) => { 
  await Promise.all(phones.map(async ({ phone, id }) => { 
    if (id === undefined) { 
      await Phone.create({ contactId: idContact, phone });
    } else { 
      await Phone.update({ phone }, { where: { id } });
    }
}));
};

const updateContact = async (idContact, contactData) => {
  const { firstName, lastName, cpf, emails, phones } = contactData;

  const checkId = getById(idContact);
  if (checkId.length === 0) { 
    return null;
  }
  await Contact.update({ firstName, lastName, cpf }, { where: { id: idContact } });
  if (emails.length !== 0) { 
   await updadeEmails(emails, idContact);
 }
  if (phones.length !== 0) { 
    await updadePhones(phones, idContact);
}
  return 'OK';
};

module.exports = {
  getAllContacts,
  createContact,
  getById,
  deleteContact,
  updateContact,
};