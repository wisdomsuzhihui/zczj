/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FlowFinancingOrder', {
    FlowFinancingOrderID: {
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
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_FlowFinancing',
        key: 'ID'
      }
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OrderType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'ZC_FlowFinancingOrder'
  });
};
