'use strict';

/**
 * Load helpers
 */
const normalizeId = require('./normalize-id');
const removeVersion = require('./remove-version');
const removePrivatePaths = require('./remove-private-paths');

/**
 * Default toJSON implementation for mongoose schema's
 */
module.exports = function toJSON(schema) {

  //NOTE: this plugin is actually called *after* any schema's
  //custom toJSON has been defined, so we need to ensure not to
  //overwrite it. Hence, we remember it here and call it later
  let transform;
  if (schema.options.toJSON && schema.options.toJSON.transform) {
    transform = schema.options.toJSON.transform;
  }

  //Extend toJSON options
  schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
    transform(doc, ret) {

      //Remove private paths
      removePrivatePaths(ret, schema);

      //Remove version
      removeVersion(ret);

      //Normalize ID
      normalizeId(ret);

      //Call custom transform if present
      if (transform) {
        return transform(doc, ret);
      }
    },
  });
};
