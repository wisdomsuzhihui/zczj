/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_UserCoupon', {
    UserCouponID: {
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
    CouponID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_Coupon',
        key: 'CouponID'
      }
    },
    IsUsed: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    UseDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceiveDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_UserCoupon'
  });
};
