/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommentStar', {
    CommentStarID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Comment',
        key: 'CommentID'
      }
    },
    StarType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Star: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'CommentStar'
  });
};
