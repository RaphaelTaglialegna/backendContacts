require('dotenv').config();
const APP = require('./app');

const PORT = process.env.PORT || 3001;
APP.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
