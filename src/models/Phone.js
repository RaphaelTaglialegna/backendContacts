module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define('phone', {
  
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    
    contactId: { 
      type: DataTypes.INTEGER, 
      foreignKey: true 
    },

    phone: {
      tyepe: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    timestamps: false,
    tableName: 'contacts',
  });
  Phone.associate = (models) => { 
    Phone.belongsTo(models.Contact, 
      { foreignKey: 'contactId', as: 'phones' });
  };
  
  return Phone;
  };