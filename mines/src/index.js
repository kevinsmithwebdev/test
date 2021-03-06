import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import App from './components/App';

import './index.css';

import rootReducer from './redux/reducers'


const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
