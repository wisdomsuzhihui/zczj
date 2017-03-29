/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ZC_Session', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    userId: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.STRING(50000)
  })
}