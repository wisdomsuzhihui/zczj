/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_GDRebate', {
    GDRebateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsExpiration: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_GDRebate'
  });
};
