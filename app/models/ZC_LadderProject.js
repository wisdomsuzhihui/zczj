/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_LadderProject', {
    LadderProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_project',
        key: 'ProjectID'
      }
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Num: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_LadderProject'
  });
};
