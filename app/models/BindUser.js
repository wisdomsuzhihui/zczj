/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BindUser', {
    BindID: {
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
    OpenID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IsOldUser: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((1))"
    },
    BindType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())"
    }
  }, {
    tableName: 'BindUser'
  });
};
