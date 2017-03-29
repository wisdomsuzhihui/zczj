/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CrawlerNewsRelation', {
    CrawlerRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NewsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'News',
        key: 'NewsID'
      }
    },
    CrawlerNewsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CrawlerNews',
        key: 'CrawlerNewsID'
      }
    }
  }, {
    tableName: 'CrawlerNewsRelation'
  });
};
