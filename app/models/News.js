/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('News', {
    NewsID: {
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
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'CategoryID'
      }
    },
    CategoryLevel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    newtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    newheader: {
      type: "BIT",
      allowNull: true,
      defaultValue: "((0))"
    },
    newcontent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newsynopsis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newkey: {
      type: DataTypes.STRING,
      allowNull: true
    },
    newdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    newman: {
      type: DataTypes.STRING,
      allowNull: true
    },
    newform: {
      type: DataTypes.STRING,
      allowNull: true
    },
    newpoint: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    newimages: {
      type: DataTypes.STRING,
      allowNull: true
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Recommend: {
      type: "BIT",
      allowNull: true,
      defaultValue: "((0))"
    },
    HeaderTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RecommendTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NeedLogin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    JinFen: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ProbationContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CommentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    DisplayMode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    IsTimedPublish: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    IsPublish: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((1))"
    },
    PublishTimed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PlateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'News',
    timestamps: false,
  });
};