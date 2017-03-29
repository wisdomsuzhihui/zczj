/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_key_Plate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    KeyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Analysis_key',
        key: 'KeyID'
      }
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    }
  }, {
    tableName: 'Analysis_key_Plate'
  });
};
