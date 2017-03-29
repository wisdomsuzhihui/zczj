/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MsgSendRecords', {
    SendRecordID: {
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
    SendUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReceiveUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'MsgSendRecords'
  });
};
