/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Option', {
    OptionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    OptionCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OptionCategory',
        key: 'OptionCategoryID'
      }
    },
    OptionName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Other: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Option'
  });
};
