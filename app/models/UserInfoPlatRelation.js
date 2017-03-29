/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserInfoPlatRelation', {
    UserInfoPlatRelationID: {
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
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    }
  }, {
    tableName: 'UserInfoPlatRelation'
  });
};
