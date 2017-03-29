/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FlowFinancingRecordProject', {
    FFRPID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FlowFinancingRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_FlowFinancingRecord',
        key: 'FlowFinancingRecordID'
      }
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_FlowFinancingRecordProject'
  });
};
