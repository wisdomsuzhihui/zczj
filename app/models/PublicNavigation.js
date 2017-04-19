/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PublicNavigation', {
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ImgUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Regtime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ontime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BusinessScope: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FoundingTeam: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SiteResume: {
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
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((100))"
    },
    ContactInfo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    QQ: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShortDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Medal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Field: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsAudit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'PublicNavigation',
    timestamps: false
  });
};