/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InvestmentPlan', {
    InvestmentPlanID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    Job: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    RealName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WeiXin: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'InvestmentPlan'
  });
};
