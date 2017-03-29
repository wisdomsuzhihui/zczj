/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectIDRelation', {
    RelationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatProjectID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'ProjectID'
      }
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    }
  }, {
    tableName: 'ProjectIDRelation'
  });
};
