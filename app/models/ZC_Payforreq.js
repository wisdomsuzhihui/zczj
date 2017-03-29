/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Payforreq', {
    PayforreqID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PresentRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ZC_PresentRecord',
        key: 'PresentRecordID'
      }
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))"
    }
  }, {
    tableName: 'ZC_Payforreq'
  });
};
