/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_ProjectDetail', {
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CurrentAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TargetAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Support: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TargetDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProjectSponsor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsTop: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsDel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsAPIAdd: {
      type: "BIT",
      allowNull: true
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsAduit: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'v_ProjectDetail'
  });
};
