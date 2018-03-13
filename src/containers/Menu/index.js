import {
  EVENT_ENUMS,
  isSupportedApp,
  requestAndWait
} from '@hk01-digital/react-native-webview-events/cjs/web'
import React from 'react'

import Button from '../../components/Button'
import config from '../../config'

class Menu extends React.PureComponent {
  onBackClick () {
    if (isSupportedApp(config.supportedAppVersion)) {
      requestAndWait({
        type: EVENT_ENUMS.NAVIGATE_GO_BACK
      })
    }
  }

  onLoginClick () {
    if (isSupportedApp(config.supportedAppVersion)) {
      requestAndWait({
        type: EVENT_ENUMS.GET_JWT,
        payload: {
          withLogin: true
        }
      })
    }
  }

  onShareBtnClick () {
    if (isSupportedApp(config.supportedAppVersion)) {
      requestAndWait({
        type: EVENT_ENUMS.OPEN_SHARE_DIALOG,
        payload: {
          message: window.location.href,
          title: 'Greeting from hall',
          url: window.location.href
        }
      })
    }
  }

  onHidingHeader () {
    if (isSupportedApp(config.supportedAppVersion)) {
      requestAndWait({
        type: EVENT_ENUMS.SET_NAVIGATION_OPTIONS,
        payload: {
          hideHeader: true
        }
      })
    }
  }

  render () {
    return (
      <div>
        <Button text='< Back' onClick={this.onBackClick} />
        <Button text='Login' onClick={this.onLoginClick} />
        <Button text='Share' onClick={this.onShareBtnClick} />
        <Button text='Hide Header' onClick={this.onHidingHeader} />
      </div>
    )
  }
}

export default Menu
