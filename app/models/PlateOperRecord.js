/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlateOperRecord', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    },
    OperType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PlateOperRecord'
  });
};
