'use strict';

/**
 * Helper to normalize ID
 */
module.exports = function normalizeId(ret) {
  if (ret._id && typeof ret._id === 'object' && ret._id.toString) {
    if (typeof ret.id === 'undefined') {
      ret.id = ret._id.toString();
    }
  }
  if (typeof ret._id !== 'undefined') {
    delete ret._id;
  }
};
