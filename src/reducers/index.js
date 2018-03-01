import {combineReducers} from 'redux'
import test from './1'

// combines the reducers into a single reducer function
// this optimises the reducers and makes file management easier
const reducers = combineReducers({
  // list of reducers to be combined
  test,
})

// exports the reducers combined, this is utilised at the location the store is created
// (index.js in this app)
export default reducers
