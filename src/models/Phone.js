module.exports = (sequelize, DataTypes) => {
  const Phone = sequelize.define('Phone', {  
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
    },    
    contactId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  },
  {
    timestamps: false,
    tableName: 'phones',
    underscored: true,
  });
  Phone.associate = (models) => { 
    Phone.belongsTo(models.Contact, { foreignKey: 'contactId', as: 'phones' });
  };
  
  return Phone;
  };