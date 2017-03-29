/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RolePowers', {
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Roles',
        key: 'ID'
      }
    },
    PowerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Powers',
        key: 'ID'
      }
    }
  }, {
    tableName: 'RolePowers'
  });
};
