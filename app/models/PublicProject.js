/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PublicProject', {
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    EnterpriseNature: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Thumbnailpicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Audit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Leader: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AddTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastUpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Feedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Recommend: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))"
    },
    RecommendTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ExcessReturnAmounts: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    EachAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ProportionShares: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProjectShowPic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ContactPerson: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ContactPhone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'PublicProject',
    timestamps: false
  });
};