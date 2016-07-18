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

  //Set toJSON handler
  schema.options.toJSON = {
    transform(doc, ret) {

      //Delete version
      if (ret.__v) {
        delete ret.__v;
      }

      //Set ID
      if (ret._id) {
        ret.id = ret._id.toString();
        delete ret._id;
      }

      //Call custom transform if present
      if (transform) {
        transform(doc, ret);
      }
    },
  };
};
