/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_AnnualInterest', {
    AnnualInterestID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RangeStart: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RangeEnd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InterestStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AnnualType: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ZC_AnnualInterest'
  });
};
