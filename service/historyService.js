const logger = require('../lib/logger');
const historyDao = require('../dao/historyDao');

const service = {
  // history 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await historyDao.insert(params);
      logger.debug(`(historyService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(historyService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await historyDao.selectList(params);
      logger.debug(`(historyService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(historyService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await historyDao.selectInfo(params);
      logger.debug(`(historyService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(historyService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await historyDao.update(params);
      logger.debug(`(historyService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(historyService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await historyDao.delete(params);
      logger.debug(`(historyService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(historyService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
