/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserProjectSetting', {
    SettingID: {
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
    StartAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CompleteRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CategoryID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Platform: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'UserProjectSetting'
  });
};
