/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ChannelContent', {
    ChannelContentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ChannelCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Channel',
        key: 'ChannelCode'
      }
    },
    Object: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    ClickTimes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ChannelContent',
    timestamps: false
  });
};