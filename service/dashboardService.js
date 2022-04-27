const logger = require('../lib/logger');
const dashboardDao = require('../dao/dashboardDao');

const service = {
  // dashboard 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await dashboardDao.insert(params);
      logger.debug(`(dashboardService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(dashboardService.reg) ${err.toString()}`);
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
      result = await dashboardDao.selectList(params);
      logger.debug(`(dashboardService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(dashboardService.list) ${err.toString()}`);
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
      result = await dashboardDao.selectInfo(params);
      logger.debug(`(dashboardService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(dashboardService.info) ${err.toString()}`);
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
      result = await dashboardDao.update(params);
      logger.debug(`(dashboardService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(dashboardService.edit) ${err.toString()}`);
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
      result = await dashboardDao.delete(params);
      logger.debug(`(dashboardService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(dashboardService.delete) ${err.toString()}`);
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
