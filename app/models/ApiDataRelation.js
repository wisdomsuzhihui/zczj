/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ApiDataRelation', {
    ApiDataRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ApiUserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ApiUserInfo',
        key: 'ApiUserID'
      }
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))"
    }
  }, {
    tableName: 'ApiDataRelation'
  });
};
