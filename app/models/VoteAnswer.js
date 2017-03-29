/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteAnswer', {
    AnswerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    QuestionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VoteQuestion',
        key: 'QuestionID'
      }
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'VoteAnswer'
  });
};
