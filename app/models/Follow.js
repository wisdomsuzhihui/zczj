/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Follow', {
    FollowID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FollowUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Follow'
  });
};
