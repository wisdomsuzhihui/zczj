/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Plat_MyPlat', {
    MyPlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Plat_MyPlat'
  });
};
