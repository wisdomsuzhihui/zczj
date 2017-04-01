/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('UserMoreInfo', {
    UserMoreID: {
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
    Nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RealName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RealNameShow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Birthday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QQShow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MySignature: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SpecialAvatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'UserMoreInfo',
    timestamps: false
  });
};