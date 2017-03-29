/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ManagerRecord', {
    ManagerRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ManagerRecord'
  });
};
