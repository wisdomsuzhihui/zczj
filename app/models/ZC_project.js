/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_project', {
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TargetName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ShortDesc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TimesRotation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SellStock: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TargetAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CurrentAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    BigPic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MiddlePic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SmallPic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ViewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    LastUpdateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    TargetNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LowVote: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OnlineState: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PlatProjectID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InvestmentType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    ISReservation: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ISMovie: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    MovieBody: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MobilePic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsDel: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    IsHide: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    IsLadder: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    HightVote: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    IsTransfer: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    IsPledge: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    IsBalance: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    IsStand: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    BalanceDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    StandType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    IsLous: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((1))"
    },
    StandRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    StandTerm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NewUserLimit: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    FinishDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ZC_project'
  });
};
