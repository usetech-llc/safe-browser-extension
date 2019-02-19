import {
  SIGN_MESSAGE
} from 'actions/messages'

const initialState = {
  windowId: undefined
}

function messages(state = initialState, action) {
  let messages

  switch (action.type) {
    case SIGN_MESSAGE:
      if (action.dappWindowId && action.dappTabId) {
        messages.dappWindowId = action.dappWindowId
        messages.dappTabId = action.dappTabId
      }
      messages = {
        ...state,
      }
      if (action.windowId) {
        messages.windowId = action.windowId
      }
      return messages

    default:
      return state
  }
}

export default messages
