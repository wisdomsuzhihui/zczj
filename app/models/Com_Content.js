/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Com_Content', {
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    ObjectID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    NickName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Sp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    ClientIP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TopicTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TopicUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TopicId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    replyId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'Com_Content'
  });
};
