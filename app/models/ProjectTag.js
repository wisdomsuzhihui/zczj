/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectTag', {
    ProjectTagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ProjectTag'
  });
};
