/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FuiouRefund', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metdt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fuorderno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tpmerdt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    futpotderno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accntno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bankno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    result: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mac: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'FuiouRefund'
  });
};
