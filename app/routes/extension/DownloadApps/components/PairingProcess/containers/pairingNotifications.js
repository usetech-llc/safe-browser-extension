import firebase from 'firebase/app'
import 'firebase/messaging'
import EthUtil from 'ethereumjs-util'
import BigNumber from 'bignumber.js'
import fetch from 'node-fetch'

import {
  getFirebaseAuthDomain,
  getFirebaseDatabaseUrl,
  getFirebaseProjectId,
  getFirebaseStorageBucket,
  getFirebaseMessagingSenderId,
  getPushNotificationServiceUrl
} from '../../../../../../../config'

export const setUpNotifications = () => {
  const messaging = setUpFirebase()
  return messaging.getToken()
}

const setUpFirebase = () => {
  const configFirebase = {
    authDomain: getFirebaseAuthDomain(),
    databaseURL: getFirebaseDatabaseUrl(),
    projectId: getFirebaseProjectId(),
    storageBucket: getFirebaseStorageBucket(),
    messagingSenderId: getFirebaseMessagingSenderId()
  }

  //var configStr = configFirebase.authDomain + "\n" +
  //  configFirebase.databaseURL + "\n" +
  //  configFirebase.projectId + "\n" +
  //  configFirebase.storageBucket + "\n" +
  //  configFirebase.messagingSenderId + "\n";
  //alert(configStr);

  if (!firebase.apps.length) {
    firebase.initializeApp(configFirebase)
  }

  return firebase.messaging();
}

export const authPushNotificationService = async (pushToken, privateKey) => {
  try {
    const url = getPushNotificationServiceUrl() + 'auth/'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = generateAuthContent(pushToken, privateKey)
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
      credentials: 'omit',
      referrerPolicy: 'no-referrer'
    })
    return response && response.status === 201
  } catch (err) {
    alert(err);
    console.error(err)
    return false
  }
}

// Data sent to the push notification service to register and pair the device.
const generateAuthContent = (pushToken, privateKey) => {
  const data = EthUtil.sha3('GNO' + pushToken)
  const vrs = EthUtil.ecsign(data, privateKey)
  const r = new BigNumber(EthUtil.bufferToHex(vrs.r))
  const s = new BigNumber(EthUtil.bufferToHex(vrs.s))
  const authContent = JSON.stringify({
    signature: {
      r: r.toString(10),
      s: s.toString(10),
      v: vrs.v
    },
    push_token: pushToken
  })
  return authContent
}
