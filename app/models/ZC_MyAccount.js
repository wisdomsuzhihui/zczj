/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_MyAccount', {
    MyAccountID: {
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
    AvailableBalance: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "((0))"
    },
    FreezingAmount: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "((0))"
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_MyAccount'
  });
};
