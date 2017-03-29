/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectPic', {
    ProjectPicID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Project',
        key: 'ProjectID'
      }
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ProjectPic'
  });
};
