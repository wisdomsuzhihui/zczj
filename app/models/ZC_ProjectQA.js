/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectQA', {
    ProjectQAID: {
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
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsReply: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_ProjectQA'
  });
};
