/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_LeadInvestors', {
    LeadInvestorsID: {
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
    Avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "((0))"
    },
    Introduction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Reasons: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_LeadInvestors'
  });
};
