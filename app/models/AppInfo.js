/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppInfo', {
    AppInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    AppInstalledInfo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    System: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Version: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'AppInfo'
  });
};
