/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_SysModule', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ModuleName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    px: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'OA_SysModule'
  });
};
