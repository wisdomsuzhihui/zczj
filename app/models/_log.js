/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('_log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    thread: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true
    },
    logger: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Exception: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: '_log'
  });
};
