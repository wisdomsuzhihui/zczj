/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Pledge', {
    PledgeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_project',
        key: 'ProjectID'
      }
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SerialNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CreditLimit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    LoanAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    RepaymentMethod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cycle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PledgeStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AmountTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    RepaymentAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    AuditPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GrantDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RepaymentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Lenders: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LendersDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_Pledge'
  });
};
