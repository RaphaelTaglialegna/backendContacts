module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('contact', {
  
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
    },
    fistName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cpf: DataTypes.STRING,  
  },
  {
    timestamps: false,
    tableName: 'contacts',
  });
  
  return Contact;
  };