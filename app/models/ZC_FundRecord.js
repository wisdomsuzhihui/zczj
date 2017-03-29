/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FundRecord', {
    FundRecordID: {
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
    FundType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TransactionAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AvailableBalance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    FreezingAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    S_AvailableBalance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    S_FreezingAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())"
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ZC_FundRecord'
  });
};
