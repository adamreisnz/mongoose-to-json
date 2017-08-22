'use strict';

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

      //Set ID
      setId(ret);

      //Call custom transform if present
      if (transform) {
        return transform(doc, ret);
      }
    },
  });
};

/**
 * Helper to remove private paths
 */
function removePrivatePaths(ret, schema) {
  for (const path in schema.paths) {
    if (schema.paths[path].options && schema.paths[path].options.private) {
      if (typeof ret[path] !== 'undefined') {
        delete ret[path];
      }
    }
  }
}

/**
 * Helper to remove version
 */
function removeVersion(ret) {
  if (typeof ret.__v !== 'undefined') {
    delete ret.__v;
  }
}

/**
 * Helper to set ID
 */
function setId(ret) {
  if (ret._id && typeof ret._id === 'object' && ret._id.toString) {
    if (typeof ret.id === 'undefined') {
      ret.id = ret._id.toString();
    }
    delete ret._id;
  }
}
