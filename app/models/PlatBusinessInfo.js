/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlatBusinessInfo', {
    BusinessInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    },
    BusinessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IcCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkMan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    OrgCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TaxCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LinkMobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BusinessLicense: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WechatID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CompanyActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    ProjectSuccessNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    ActiveTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    IsShowIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'PlatBusinessInfo'
  });
};
