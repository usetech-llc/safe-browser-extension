export const ensureOnce = (fn) => {
  let executed = false
  let response

  return (...args) => {
    if (executed) return response
    executed = true
    response = fn.apply(undefined, args)

    return response
  }
}
