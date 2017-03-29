/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_key', {
    KeyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    KeyWord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descrition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())"
    }
  }, {
    tableName: 'Analysis_key'
  });
};
