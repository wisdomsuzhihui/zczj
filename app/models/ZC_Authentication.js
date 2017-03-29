/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Authentication', {
    AuthenticationID: {
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
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IDNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Area: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PositiveIDCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NegativeIDCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BusinessCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AnnualIncome: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Enterprise: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Business: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PersonalAssets: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    InvestmentAmountStart: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    InvestmentAmountEnd: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    InvestmentExperience: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AttentionDirection: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InvestmentIdeas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Provided: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsReaName: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    HasCaAuth: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    IsLeader: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_Authentication'
  });
};
