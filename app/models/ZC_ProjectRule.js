/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectRule', {
    ProjectRuleID: {
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
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ManagerFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    OtherFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_ProjectRule'
  });
};
