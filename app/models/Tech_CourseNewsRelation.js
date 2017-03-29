/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tech_CourseNewsRelation', {
    RelationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NewsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'News',
        key: 'NewsID'
      }
    },
    CourseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tech_Course',
        key: 'CourseID'
      }
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'Tech_CourseNewsRelation'
  });
};
