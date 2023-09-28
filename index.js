import {normalizeId, removeVersion, removePrivatePaths} from './helpers.js'

/**
 * Default toJSON implementation for mongoose schema's
 */
export function toJSON(schema) {

  //NOTE: this plugin is actually called *after* any schema's
  //custom toJSON has been defined, so we need to ensure not to
  //overwrite it. Hence, we remember it here and call it later
  let transform
  if (schema.options.toJSON && schema.options.toJSON.transform) {
    transform = schema.options.toJSON.transform
  }

  //Extend toJSON options
  schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
    transform(doc, ret, options) {

      //Remove private paths
      if (schema.options.removePrivatePaths !== false) {
        removePrivatePaths(ret, schema)
      }

      //Remove version
      if (schema.options.removeVersion !== false) {
        removeVersion(ret)
      }

      //Normalize ID
      if (schema.options.normalizeId !== false) {
        normalizeId(ret)
      }

      //Call custom transform if present
      if (transform) {
        return transform(doc, ret, options)
      }

      //Return
      return ret
    },
  })
}
