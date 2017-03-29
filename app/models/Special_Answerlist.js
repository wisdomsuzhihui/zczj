/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Special_Answerlist', {
    AnswerlistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RightNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    TimeFormat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'Special_Answerlist'
  });
};
