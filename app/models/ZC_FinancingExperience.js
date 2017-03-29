/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FinancingExperience', {
    FinancingExperienceID: {
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
    MechanismName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FinancingTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FinancingName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Valuation: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'ZC_FinancingExperience'
  });
};
