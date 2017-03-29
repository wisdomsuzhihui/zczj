/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FeedBack', {
    FeedBackID: {
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
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Source: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'FeedBack'
  });
};
