/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectRelation', {
    ProjectRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ZCProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_project',
        key: 'ProjectID'
      }
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'ProjectID'
      }
    }
  }, {
    tableName: 'ZC_ProjectRelation'
  });
};
