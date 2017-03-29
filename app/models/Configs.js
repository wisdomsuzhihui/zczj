/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Configs', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ConfigKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ConfigValue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Configs'
  });
};
