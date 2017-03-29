/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MailFailure', {
    MailFailureID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'MailFailure'
  });
};
