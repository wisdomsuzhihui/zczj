/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SearchKeywords', {
    KeywordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Keywords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Frequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'SearchKeywords'
  });
};
