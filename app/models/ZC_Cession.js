/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Cession', {
    CessionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
      allowNull: false
    },
    Share: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OriginalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    TransferAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    CounterFee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsFirst: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'ZC_Cession'
  });
};
