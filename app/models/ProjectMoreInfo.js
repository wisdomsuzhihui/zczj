/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectMoreInfo', {
    ProjectMoreInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'ProjectID'
      }
    },
    ShortDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Threshold: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Team_Score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((51))"
    },
    Idea_Score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((51))"
    },
    Market_Score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((51))"
    },
    Profit_Score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((51))"
    },
    Compete_Score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((51))"
    },
    Total_Score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((51))"
    },
    Suggestion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ProjectMoreInfo'
  });
};
