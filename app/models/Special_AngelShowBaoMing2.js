/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Special_AngelShowBaoMing2', {
    BaoMingID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RecommendPhone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Special_AngelShowBaoMing2'
  });
};
