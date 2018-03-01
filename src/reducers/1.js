import * as actions from '../actions'

// Contains the initial state of the application
// This could have been a subsection of the overall store
// containing only the state of the relevant parts for the reducer below
export const initialState = {}


/**
 * This controls the functionality of the app and updates the state
 * must have a default that returns the state as it is
 * this stops the app from breaking if the action is not in the switch
 * Contains a switch which will reference an action from the actions.js file
 * this can be written as a string but is safer taken as a variable which is stored
 * in the action.js file and cross-referenced against the action itself
 * Unless returning the state as it is prior to the action this function MUST return a new object
 * as not to mutate the previous state, required for time travel actions
 * @param {object} state defines the current state of the app BEFORE the action is taken
 * @param {object} action defines the action that has been requested from the app
 */
export default (state = initialState, action) => {
  // console.log(action.type)
  const {type, payload} = action
  switch (type) {
  case actions.ADD_CHAT:
  case actions.SUBMIT_LOG:
    return Object.assign({}, state, payload)

  default:
    return state
  }
}
