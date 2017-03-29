/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Depts', {
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
    SortIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
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
        model: 'Depts',
        key: 'ID'
      }
    }
  }, {
    tableName: 'Depts'
  });
};
