/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MessageDelReply', {
    MsgDelReplyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MsgReplyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MsgReply',
        key: 'MsgReplyID'
      }
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'MessageDelReply'
  });
};
