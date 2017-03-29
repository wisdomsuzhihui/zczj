/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ForumModuleRelation', {
    ModuleRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicProject',
        key: 'ProjectID'
      }
    },
    ForumICO: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ForumModuleRelation'
  });
};
