/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CrawlerNews', {
    CrawlerNewsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Source: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SiteName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SourceLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    WebDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: " "
    },
    RealName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    IsFirst: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PlateID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'CrawlerNews'
  });
};
