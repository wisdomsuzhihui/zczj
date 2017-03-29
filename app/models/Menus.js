/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Menus', {
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
    ImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NavigateUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SortIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TreeLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Enabled: {
      type: "BIT",
      allowNull: false
    },
    IsTreeLeaf: {
      type: "BIT",
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Menus',
        key: 'ID'
      }
    },
    ViewPowerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Powers',
        key: 'ID'
      }
    }
  }, {
    tableName: 'Menus'
  });
};
