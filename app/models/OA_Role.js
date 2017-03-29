/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_Role', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RoleName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RolePermissionStr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    px: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'OA_Role'
  });
};
