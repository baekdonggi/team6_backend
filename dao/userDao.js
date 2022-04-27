const { Op } = require('sequelize');
const { User } = require('../models/index');
const logger = require('../lib/logger');

const dao = {
  // 로그인을 위한 사용자 조회
  selectUser(params) {
    return new Promise((resolve, reject) => {
      User.findOne({ // 하나만 찾아줌
        attributes: ['id', 'userid', 'password', 'name', 'auth'],
        // 토큰 생성에서 발행한 항목
        where: { userid: params.userid },
        // findOne이 찾을 항목 : userid(id로 대조)
      }).then((selectOne) => {
        resolve(selectOne);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      User.create(params).then((inserted) => {
        // password는 제외하고 리턴함
        const insertedResult = { ...inserted };
        delete insertedResult.dataValues.password;
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.name) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` }, // like검색
      };
    }
    if (params.userid) {
      setQuery.where = {
        ...setQuery.where,
        userid: params.userid, // '='검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      User.findAndCountAll({
        ...setQuery,
        attributes: { exclude: ['password'] }, // password 필드 제외
        // include: [
        //   {
        // model: Department,
        // as: 'Department',
        //   },
        // ],
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // // 회원가입 아이디 중복 체크
  // idOverlabCheck(params) {
  //   return new Promise((resolve, reject) => {
  //     User.findOne({ where: { userId: params.userId } })
  //       .then((idCheckResult) => {
  //         resolve(idCheckResult);
  //       }).catch((err) => {
  //         reject(err);
  //       });
  //   });
  // },

  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      User.findByPk(
        params.id,
        {
          attributes: { exclude: ['password'] }, // password 필드 제외
        },
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      User.update(
        params,
        {
          where: { id: params.id },
        },
        logger.info(`(userService.edit) ${JSON.stringify(params.id)}`),
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },

  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      User.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },

};

module.exports = dao;
