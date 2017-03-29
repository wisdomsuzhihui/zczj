/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectRebate', {
    ProjectRebateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_project',
        key: 'ProjectID'
      }
    },
    CorporateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FinancingDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Way: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ActualAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Proportion: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ExitAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ExitProportion: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ReceivedAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    StillAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DocumentMaker: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DocumentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Auditor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AuditDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_ProjectRebate'
  });
};
