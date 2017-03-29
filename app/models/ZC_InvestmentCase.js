/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_InvestmentCase', {
    InvestmentCaseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AuthenticationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_Authentication',
        key: 'AuthenticationID'
      }
    },
    ProjectLogo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WebSite: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProjectIntroduction: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_InvestmentCase'
  });
};
