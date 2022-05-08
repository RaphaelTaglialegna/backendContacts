const Joi = require('joi');

const contactSchema = Joi.object().keys({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  cpf: Joi.string().length(11),
  emails: Joi.array().items({
    email: Joi.string().email(),
  }),
  phones: Joi.array().items({
    phone: Joi.string().length(11).required(),
  }),
}).messages({
  'any.required': '400|{{#label}} is required',
  'string.min': '400|{#label} length must be at least 2 characters long',
  'string.email': '400|{#label} must be a valid email',
  'string.length': '400|{#label} length must be 11 characters long',

});

// Criamos um método para verificar se os dados do usuário são válidos
const validateContact = async (req, res, next) => {
  const { firstName, lastName, cpf, emails, phones } = req.body;
  const { error } = contactSchema.validate({ firstName, lastName, cpf, emails, phones });

if (error) {
  const [status, message] = error.message.split('|');  
  return res.status(status).json({ message });
}

next();
};

module.exports = validateContact;
