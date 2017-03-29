/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TitleUsers', {
    TitleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Titles',
        key: 'ID'
      }
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'ID'
      }
    }
  }, {
    tableName: 'TitleUsers'
  });
};
