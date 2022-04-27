const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const dashboardService = require('../service/dashboardService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      xcoordinate: req.body.xcoordinate,
      ycoordinate: req.body.ycoordinate,
      dayoutput: req.body.dayoutput,
      errorpercent: req.body.errorpercent,
      dicenum: req.body.dicenum,
      time: req.body.time,
      start: req.body.start,
      end: req.body.end,
      errorproducts: req.body.errorproducts,
      goodproducts: req.body.goodproducts,
      oddnum: req.body.oddnum,
      evennum: req.body.evennum,
    };
    logger.info(`(dashboard.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.xcoordinate) {
      const err = new Error('Not allowed null (xcoordinate)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await dashboardService.reg(params);
    logger.info(`(dashboard.reg.result) ${JSON.stringify(result)}`);

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
      id: req.query.id,
    };
    logger.info(`(dashboard.list.params) ${JSON.stringify(params)}`);

    const result = await dashboardService.list(params);
    logger.info(`(dashboard.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(dashboard.info.params) ${JSON.stringify(params)}`);

    const result = await dashboardService.info(params);
    logger.info(`(dashboard.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      xcoordinate: req.body.xcoordinate,
      ycoordinate: req.body.ycoordinate,
      dayoutput: req.body.dayoutput,
      errorpercent: req.body.errorpercent,
      dicenum: req.body.dicenum,
      time: req.body.time,
      start: req.body.start,
      end: req.body.end,
      errorproducts: req.body.errorproducts,
      goodproducts: req.body.goodproducts,
      oddnum: req.body.oddnum,
      evennum: req.body.evennum,
    };
    logger.info(`(dashboard.update.params) ${JSON.stringify(params)}`);

    const result = await dashboardService.edit(params);
    logger.info(`(dashboard.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(dashboard.delete.params) ${JSON.stringify(params)}`);

    const result = await dashboardService.delete(params);
    logger.info(`(dashboard.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
