/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PledgeRepayment', {
    PledgeRepaymentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    SerialNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Principal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OverdueDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OverdueAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    RepaymentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ActualPayment: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    RepaymentStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AuditPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    GrantDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ZC_PledgeRepayment'
  });
};
