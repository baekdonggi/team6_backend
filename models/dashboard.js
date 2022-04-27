const Sequelize = require('sequelize');

module.exports = class Dashboard extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      xcoordinate: {
        type: Sequelize.INTEGER,
      },
      ycoordinate: {
        type: Sequelize.INTEGER,
      },
      dayoutput: {
        type: Sequelize.INTEGER,
      },
      errorpercent: {
        type: Sequelize.INTEGER,
      },
      dicenum: {
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.DATE,
      },
      start: {
        type: Sequelize.DATE,
      },
      end: {
        type: Sequelize.DATE,
      },
      errorproducts: {
        type: Sequelize.INTEGER,
      },
      goodproducts: {
        type: Sequelize.INTEGER,
      },
      oddnum: {
        type: Sequelize.INTEGER,
      },
      evennum: {
        type: Sequelize.INTEGER,
      },

    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }
};
