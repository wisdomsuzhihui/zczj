/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectAgreement', {
    ProjectAgreementID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FilePath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PreviewUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Page: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DocId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FsdId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_ProjectAgreement'
  });
};
