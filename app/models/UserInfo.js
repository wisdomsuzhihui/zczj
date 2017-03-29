/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserInfo', {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EmailActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    UserType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    IsRecommend: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UpgradeTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RecommendDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PromotionCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RegSource: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    WechatID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsGuide: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsTwoGuide: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsThreeGuide: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsThreeGuideShow: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsTwoGuideShow: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'UserInfo'
  });
};
