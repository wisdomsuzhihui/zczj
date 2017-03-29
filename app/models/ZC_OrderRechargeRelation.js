/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_OrderRechargeRelation', {
    OrdeRRID: {
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
    RechargeRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_RechargeRecord',
        key: 'RechargeRecordID'
      }
    }
  }, {
    tableName: 'ZC_OrderRechargeRelation'
  });
};
