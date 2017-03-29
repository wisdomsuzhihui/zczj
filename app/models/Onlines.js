/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Onlines', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    IPAdddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LoginTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'ID'
      }
    }
  }, {
    tableName: 'Onlines'
  });
};
