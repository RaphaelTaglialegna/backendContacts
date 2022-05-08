module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {  
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cpf: DataTypes.STRING,  
  },
  {
    timestamps: false,
    tableName: 'contacts',
    underscored: true,
  });
  Contact.associate = (models) => { 
    Contact.hasMany(models.Email, 
      { foreignKey: 'contactId', as: 'emails' });
    Contact.hasMany(models.Phone, 
      { foreignKey: 'contactId', as: 'phones' });
  };
  
  return Contact;
  };