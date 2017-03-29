/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Contract', {
    ContractID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectAgreementID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_ProjectAgreement',
        key: 'ProjectAgreementID'
      }
    },
    ObjectOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ContractStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsCessionUser: {
      type: "BIT",
      allowNull: false,
      defaultValue: "((0))"
    },
    PcUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MobileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_Contract'
  });
};
