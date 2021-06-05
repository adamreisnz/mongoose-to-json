'use strict';

const dotProp = require('dot-prop');

/**
 * Helper to remove private paths
 */
module.exports = function removePrivatePaths(ret, schema) {
  for (const path in schema.paths) {
    if (schema.paths[path].options && schema.paths[path].options.private) {
      if (typeof dotProp.get(ret, path) !== 'undefined') {
        dotProp.delete(ret, path);
      }
    }
  }
};
