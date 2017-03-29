/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VerificationCode', {
    VerificationCodeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ClientIP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'VerificationCode'
  });
};
