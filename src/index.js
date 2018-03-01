import React from 'react'
import ReactDOM from 'react-dom'
// import 'onsenui/css/onsenui.css'
// import 'onsenui/css/onsen-css-components.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// import './index.css'
import * as actions from './actions'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

const store = createStore(reducers)
// shows the first state on the console
console.log(store.getState())
// subscribes to all changes of the state and shows them on the console (should be DEV only)
store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()

store.dispatch(actions.submitLog({
  log: {
    _id: 'yes',
    name: 'adam',
  },
}))

store.dispatch(actions.addChat({id: 'ben'}))
