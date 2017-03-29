/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteQuestion', {
    QuestionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    VoteModelID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VoteModel',
        key: 'VoteModelID'
      }
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SelectType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'VoteQuestion'
  });
};
