/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GraphicLive', {
    GraphicLiveID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LikeNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'GraphicLive'
  });
};
