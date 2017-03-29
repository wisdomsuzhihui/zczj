/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FlowFinancingRate', {
    FlowFinancingRateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ShowRate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CalculateRete: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Postdate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_FlowFinancingRate'
  });
};
