/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ApiUserInfo', {
    ApiUserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PassWord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ApiUserInfo'
  });
};
