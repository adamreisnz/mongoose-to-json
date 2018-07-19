'use strict';

/**
 * Helper to date2timestamp
 */
module.exports = function date2timestamp(ret) {
  if (!ret.updated && ret.updatedAt && typeof ret.updatedAt === 'object' && ret.updatedAt instanceof Date) {
    ret.updated = ret.updatedAt.getTime() / 1000;
  }
  if (!ret.created && ret.createdAt && typeof ret.createdAt === 'object' && ret.createdAt instanceof Date) {
    ret.created = ret.createdAt.getTime() / 1000;
  }
};
