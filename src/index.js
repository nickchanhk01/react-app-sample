import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import App from './App'

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

// if (isSupportedApp(Config.supportedAppVersion)) {
//   fetchAppTokenWithRetry().then(({ accessToken }) => {
//     if (accessToken) {
//       window.sessionStorage.setItem(Config.accessTokenName, accessToken)
//     }
//     render(App)
//   })
// } else {
//   render(App)
// }

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
