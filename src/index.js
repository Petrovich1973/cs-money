import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

import App from "./App"

import './style.scss'

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'))

serviceWorker.unregister()
