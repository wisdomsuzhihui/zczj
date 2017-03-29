/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_User', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())"
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())"
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      references: {
        model: 'OA_Role',
        key: 'ID'
      }
    },
    OnLine: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'OA_User'
  });
};
