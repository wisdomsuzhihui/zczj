/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExchangeActivities', {
    ActivitiesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Province: {
      type: DataTypes.STRING,
      allowNull: true
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AddTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    StarTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Cost: {
      type: "MONEY",
      allowNull: true
    },
    peopleNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Linkman: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Mark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'ExchangeActivities'
  });
};
