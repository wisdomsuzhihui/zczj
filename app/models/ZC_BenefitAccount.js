/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_BenefitAccount', {
    BenefitAccountID: {
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
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BankAccount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ReceiveAddress: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_BenefitAccount'
  });
};
