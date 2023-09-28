
/**
 * Helper to normalize ID
 */
export function normalizeId(ret) {
  if (ret._id && typeof ret._id === 'object' && ret._id.toString) {
    if (typeof ret.id === 'undefined') {
      ret.id = ret._id.toString()
    }
  }
  if (typeof ret._id !== 'undefined') {
    delete ret._id
  }
}

/**
 * Helper to remove private paths
 */
export function removePrivatePaths(ret, schema) {
  for (const path in schema.paths) {
    if (schema.paths[path].options && schema.paths[path].options.private) {
      if (typeof ret[path] !== 'undefined') {
        delete ret[path]
      }
    }
  }
}

/**
 * Helper to remove version
 */
export function removeVersion(ret) {
  if (typeof ret.__v !== 'undefined') {
    delete ret.__v
  }
}
