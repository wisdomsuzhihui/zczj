/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PayPassword', {
    PayPassworldID: {
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
    Passworld: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_PayPassword'
  });
};
