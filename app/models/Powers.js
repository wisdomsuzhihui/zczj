/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Powers', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    GroupName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Powers'
  });
};
