/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlatePhoto', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    plateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    },
    PhotoPic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'PlatePhoto'
  });
};
