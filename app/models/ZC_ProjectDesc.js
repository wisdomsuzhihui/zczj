/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectDesc', {
    ProjectDescID: {
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
    PCID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_ProjectCategoryDesc',
        key: 'PCID'
      }
    },
    TitleHide: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_ProjectDesc'
  });
};
