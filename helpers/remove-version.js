'use strict';

/**
 * Helper to remove version
 */
module.exports = function removeVersion(ret) {
  if (typeof ret.__v !== 'undefined') {
    delete ret.__v;
  }
};
