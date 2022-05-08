// const Contact = require('./Contact');

module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Email', {  
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    contactId: { 
      type: DataTypes.INTEGER, 
      foreignKey: true,
    },    
    email: { type: DataTypes.STRING, allowNull: true }, 
  },
  { 
    timestamps: false, 
    tableName: 'emails',
    underscored: true,
 });
    Email.associate = (models) => { 
      Email.belongsTo(models.Contact, { foreignKey: 'contactId', as: 'emails' });
    };
   
  return Email;
  };