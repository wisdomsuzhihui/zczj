/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectAttribute', {
    ProjectAttributeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'ProjectID'
      }
    },
    ProjectCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ProjectAttribute'
  });
};
