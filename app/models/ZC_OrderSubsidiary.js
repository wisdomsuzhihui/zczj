/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_OrderSubsidiary', {
    CouponOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_Order',
        key: 'OrderID'
      }
    },
    CouponID: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "((0))"
    },
    ManageCost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_OrderSubsidiary'
  });
};
