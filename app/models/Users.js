/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Users', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Enabled: {
      type: "BIT",
      allowNull: false
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ChineseName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EnglishName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CompanyEmail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OfficePhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    OfficePhoneExt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HomePhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CellPhone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdentityCard: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TakeOfficeTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastLoginTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DeptID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Depts',
        key: 'ID'
      }
    }
  }, {
    tableName: 'Users',
    timestamps: false
  });
};