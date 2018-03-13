import {
  EVENT_ENUMS,
  requestAndWait
} from '@hk01-digital/react-native-webview-events/cjs/web'

const delay = (duration: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve()
    }, duration)
  })
}

export const fetchAppTokenWithRetry = async (tryCount: number = 5) => {
  let response
  try {
    response = await requestAndWait({
      type: EVENT_ENUMS.GET_JWT,
      payload: { withLogin: true }
    })
  } catch (err) {
    if (tryCount > 0) {
      await delay(1000)
      return fetchAppTokenWithRetry(tryCount - 1)
    } else {
      return Promise.resolve()
    }
  }
  return response
}
