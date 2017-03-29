/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_SysMenu', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ModuleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OA_SysModule',
        key: 'ID'
      }
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    MenuName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Link: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    px: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'OA_SysMenu'
  });
};
