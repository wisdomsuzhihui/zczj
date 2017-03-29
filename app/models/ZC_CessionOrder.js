/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_CessionOrder', {
    CessionOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CessionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_Cession',
        key: 'CessionID'
      }
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_project',
        key: 'ProjectID'
      }
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    Share: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PayStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PayDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsFinished: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_CessionOrder'
  });
};
