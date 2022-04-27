const Sequelize = require('sequelize');

module.exports = class History extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      date: {
        type: Sequelize.DATEONLY,
      },
      productsAll: {
        type: Sequelize.INTEGER,
      },
      productsGood: {
        type: Sequelize.INTEGER,
      },
      productsError: {
        type: Sequelize.INTEGER,
      },
      remarks: {
        type: Sequelize.TEXT,
      },
      startAt: {
        type: Sequelize.DATEONLY,
      },
      endAt: {
        type: Sequelize.DATEONLY,
      },

    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      charset: 'utf8', // 문자 포맷
      collate: 'utf8_general_ci', // 문자 포맷(한글인식)
      paranoid: true, // deletedAt
    });
  }

  static associate(db) {
    db.History.belongsTo(db.User, { foreignKey: { name: 'userId' }, onDelete: 'SET NULL', as: 'Users' });
  }
};
