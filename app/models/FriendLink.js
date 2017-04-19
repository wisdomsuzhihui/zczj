/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('FriendLink', {
    FID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SiteLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SiteName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())"
    },
    Logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    Category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((2))"
    },
    SiteType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'FriendLink',
    timestamps: false
  });
};