/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('City', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FatherID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    CityName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'City'
  });
};
