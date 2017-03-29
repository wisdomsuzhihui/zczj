/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectFile', {
    FileID: {
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
    Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FileName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectFile'
  });
};
