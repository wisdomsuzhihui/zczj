/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Help', {
    HelpID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'CategoryID'
      }
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Help'
  });
};
