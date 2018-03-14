// import { isSupportedApp } from '@hk01-digital/react-native-webview-events/cjs/web'
import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import App from './App'

// import config from './config'

// import { fetchAppTokenWithRetry } from './utils/webviewBridgeUtils'

const render = Component => {
  const appDiv = document.getElementById('app')
  if (appDiv) {
    ReactDOM.render(
      <BrowserRouter>
        <Component />
      </BrowserRouter>,
      appDiv
    )
  } else {
    throw new Error('Cannot find app node')
  }
}

// if (isSupportedApp(config.supportedAppVersion)) {
// fetchAppTokenWithRetry().then(({ accessToken }) => {
// if (accessToken) {
// window.sessionStorage.setItem('userAccessToken', accessToken)
// }
// render(App)
// })
// } else {
// render(App)
// }

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
