/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PledgeBackups', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PledgeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PledgeRepaymentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PLedgeAmountTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    RepaymentTotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_PledgeBackups'
  });
};
