module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('email', {  
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    contactId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    
    email: { type: DataTypes.STRING, allowNull: true }, 
  },
  { timestamps: false, tableName: 'emails' });
  Email.associate = (models) => { 
    Email.belongsTo(models.Contact, 
      { foreignKey: 'contactId', as: 'emails' });
  };  
  return Email;
  };