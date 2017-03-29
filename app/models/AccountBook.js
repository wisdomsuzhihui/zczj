/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountBook', {
    AccountBookID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserInfo',
        key: 'UserID'
      }
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    PlatName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Proportion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PostValuation: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((2))"
    }
  }, {
    tableName: 'AccountBook'
  });
};
