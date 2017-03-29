/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_Customer', {
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SourceUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Source: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RegNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RealNameNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    InvestNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TotalInverstMoney: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Analysis_Customer'
  });
};
