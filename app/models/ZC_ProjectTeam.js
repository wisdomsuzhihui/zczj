/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectTeam', {
    ProjectTeamID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_project',
        key: 'ProjectID'
      }
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Job: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Avatar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_ProjectTeam'
  });
};
