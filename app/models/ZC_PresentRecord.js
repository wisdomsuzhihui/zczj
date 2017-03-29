/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PresentRecord', {
    PresentRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    CashWithdrawal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ArrivalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CounterFee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    FreeCash: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    MyBankCardID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_MyBankCard',
        key: 'MyBankCardID'
      }
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ProcessingTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_PresentRecord'
  });
};
