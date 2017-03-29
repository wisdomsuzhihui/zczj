/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Order', {
    OrderID: {
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
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ContractStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    AgreementUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PayStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsSuccess: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((1))"
    },
    IsBalance: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    OrderType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    PayAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CouponAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PcUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MobileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PayDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PaymentMethod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Term: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ZC_Order'
  });
};
