/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_LoginRecord', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LoginTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LoginIP: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'OA_LoginRecord'
  });
};
