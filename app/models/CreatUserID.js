/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CreatUserID', {
    UserID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RandomNum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Account: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'CreatUserID'
  });
};
