'use strict';

/**
 * Helper to remove private paths
 */
module.exports = function removePrivatePaths(ret, schema) {
  for (const path in schema.paths) {
    if (schema.paths[path].options && schema.paths[path].options.private) {
      if (typeof ret[path] !== 'undefined') {
        delete ret[path];
      }
    }
  }
};
