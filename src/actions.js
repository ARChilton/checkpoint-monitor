export const SUBMIT_LOG = 'SUBMIT_LOG'

export const submitLog = log => ({
  type: SUBMIT_LOG,
  payload: log,
})

export const CLEAR_LOG = 'CLEAR_LOG'

export const clearLog = log => ({
  type: CLEAR_LOG,
  payload: log,
})

export const EDIT_LOG = 'EDIT_LOG'

export const editLog = log => ({
  type: EDIT_LOG,
  payload: log,
})

export const LOCK_LOG = 'LOCK_LOG'

export const lockLog = log => ({
  type: LOCK_LOG,
  payload: log,
})
export const ADD_CHAT = 'ADD_CHAT'
export const addChat = ({
  // cuid is safer than random uuids/v4 GUIDs
  // see usecuid.org
  id = 'adam',
  msg = '',
  user = 'Anonymous',
  timeStamp = Date.now(),
} = {}) => ({
  type: ADD_CHAT,
  payload: {
    id, msg, user, timeStamp,
  },
})

export const DELETE_LOG = 'DELETE_LOG'
