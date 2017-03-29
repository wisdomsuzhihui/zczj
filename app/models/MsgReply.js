/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MsgReply', {
    MsgReplyID: {
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
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'MsgReply'
  });
};
