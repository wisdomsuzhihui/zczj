/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Open_Account', {
    AccountID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    },
    SecretKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CallbackAddress1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CallbackAddress2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Open_Account'
  });
};
