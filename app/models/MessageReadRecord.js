/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MessageReadRecord', {
    ReadRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MessageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MessageInfo',
        key: 'MessageID'
      }
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MessageReadRecord'
  });
};
