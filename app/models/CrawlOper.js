/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CrawlOper', {
    CrawlOperID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'CrawlOper'
  });
};
