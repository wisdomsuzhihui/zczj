/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_Customer_Detail', {
    DetailID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RegDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RealNameDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InverstDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsRealName: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    InverstMoney: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    InverstNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Analysis_Customer_Detail'
  });
};
