const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
// const { isLoggedIn } = require('../lib/middleware');
const userService = require('../service/userService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      userid: req.body.userid,
      name: req.body.name,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
      auth: req.body.auth,
    };
    logger.info(`(user.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name || !params.userid || !params.password) {
      const err = new Error('Not allowed null (name, userid, password)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await userService.reg(params);
    logger.info(`(user.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
      userid: req.query.userid,
    };
    logger.info(`(user.list.params) ${JSON.stringify(params)}`);

    const result = await userService.list(params);
    logger.info(`(user.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// // 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(user.info.params) ${JSON.stringify(params)}`);

    const result = await userService.info(params);
    logger.info(`(user.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// // 수정
router.put('/:id', async (req, res) => {
  try {
    const params = { // userid, password는 수정하면 안되니까 빼준다
      id: req.params.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      auth: req.body.auth,
    };
    logger.info(`(department.update.params) ${JSON.stringify(params)}`);

    const result = await userService.edit(params);
    logger.info(`(department.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// // 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(department.delete.params) ${JSON.stringify(params)}`);

    const result = await userService.delete(params);
    logger.info(`(department.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
