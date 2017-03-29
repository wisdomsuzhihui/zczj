/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PlatformQuota', {
    PlatformQuotaID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Quota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    QuotaStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AvailableCredit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_PlatformQuota'
  });
};
