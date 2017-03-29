/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlateFromSelection', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Field: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PlateForm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SuccessNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))"
    },
    TotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "((0))"
    },
    ExitProjectNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))"
    },
    Selection: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PlateFromSelection'
  });
};
