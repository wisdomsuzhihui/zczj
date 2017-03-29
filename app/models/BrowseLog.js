/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BrowseLog', {
    BrowseLogID: {
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
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Views: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastPostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'BrowseLog'
  });
};
