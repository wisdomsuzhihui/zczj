/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransferInfo', {
    STID: {
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
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicProject',
        key: 'ProjectID'
      }
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TransferPrice: {
      type: "MONEY",
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TotalAmount: {
      type: "MONEY",
      allowNull: false
    },
    EachAmount: {
      type: "MONEY",
      allowNull: true
    },
    Shares: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ExcessReturnAmounts: {
      type: "MONEY",
      allowNull: true
    },
    Contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ContactNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DetailedInformation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ReleaseTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastUpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HotRecommended: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))"
    },
    RecommendTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ""
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InfoType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'TransferInfo'
  });
};
