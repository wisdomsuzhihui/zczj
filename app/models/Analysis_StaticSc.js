/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_StaticSc', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ClickNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Analysis_StaticSc'
  });
};
