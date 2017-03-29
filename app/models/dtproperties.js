/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dtproperties', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    objectid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    property: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    uvalue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lvalue: {
      type: "IMAGE",
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(0)"
    }
  }, {
    tableName: 'dtproperties'
  });
};
