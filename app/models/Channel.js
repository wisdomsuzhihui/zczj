/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Channel', {
    ChannelCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ChannelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Status: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'Channel',
    timestamps: false,
  });
};