/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tab', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    旧标签: {
      type: DataTypes.STRING,
      allowNull: true
    },
    新标签: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F3: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'tab'
  });
};
