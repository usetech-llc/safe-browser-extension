export const SIGN_MESSAGE = 'SIGN_MESSAGE'

export const signMessage = (mgs_sign, windowId, dappWindowId, dappTabId) => ({
  type: SIGN_MESSAGE,
  mgs_sign,
  windowId,
  dappWindowId,
  dappTabId
})
