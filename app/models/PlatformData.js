/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlatformData', {
    PlatformDataID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    },
    TotalVolume: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    InvestmentNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransactionCycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Valuation: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TransactionNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompleteRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ProjectNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'PlatformData'
  });
};
