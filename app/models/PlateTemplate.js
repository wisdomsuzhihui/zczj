/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlateTemplate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlateID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PublicNavigation',
        key: 'PlatID'
      }
    },
    Attachment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AttachmentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsAudit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'PlateTemplate'
  });
};
