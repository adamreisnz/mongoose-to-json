'use strict';

/**
 * Helper to remove _id
 */
module.exports = function removeUnderscoreId(ret) {
  if (typeof ret._id !== 'undefined') {
    delete ret._id;
  }
};
