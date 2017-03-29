/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Partnership', {
    PartnershipID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PublicProject',
        key: 'ProjectID'
      }
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Partnership'
  });
};
