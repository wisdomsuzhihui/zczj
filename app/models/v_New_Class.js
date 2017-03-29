/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_New_Class', {
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClassName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NewsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    newtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    newheader: {
      type: "BIT",
      allowNull: true
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
      allowNull: true
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
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Expr1: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'v_New_Class'
  });
};
