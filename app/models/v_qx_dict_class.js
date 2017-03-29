/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_qx_dict_class', {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClassName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parentname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parentorder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'v_qx_dict_class'
  });
};
