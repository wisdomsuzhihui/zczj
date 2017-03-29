/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Logs', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Level: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Logger: {
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
    },
    LogTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Logs'
  });
};
