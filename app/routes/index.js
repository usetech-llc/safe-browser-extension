import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  PASSWORD_URL,
  TRANSACTION_URL,
  ACCOUNT_URL,
  WELCOME_URL,
  DOWNLOAD_APPS_URL,
  CHANGE_PASSWORD_URL,
  CREATE_PASSWORD_URL,
  CONFIRM_PASSWORD_URL,
  WHITELIST_URL,
  LOCKING_URL,
  RESYNC_TOKEN_URL
} from './routes'

import Transaction from 'routes/popup/Transaction/containers/Transaction'
import Welcome from 'routes/extension/Welcome/containers/Welcome'
import DownloadApps from 'routes/extension/DownloadApps/containers/DownloadApps'
import ChangePassword from 'routes/extension/ChangePassword/containers/ChangePassword'
import CreatePassword from 'routes/extension/CreatePassword/containers/CreatePassword'
import ConfirmPassword from 'routes/extension/ConfirmPassword/containers/ConfirmPassword'
import Password from 'routes/extension/Password/containers/Password'
import Account from 'routes/extension/Account/containers/Account'
import WhitelistedDapps from 'routes/extension/WhitelistedDapps/containers/WhitelistedDapps'
import LockingConfiguration from 'routes/extension/LockingConfiguration/containers/LockingConfiguration'
import ResyncToken from 'routes/extension/ResyncToken/containers/ResyncToken'

import 'assets/css/global.css'

export const PopupRoutes = () => (
  <Switch>
    <Route exact path={PASSWORD_URL} component={Password} />
    <Route exact path={TRANSACTION_URL} component={Transaction} />
  </Switch>
)

export const ExtensionRoutes = () => (
  <Switch>
    <Route exact path={WELCOME_URL} component={Welcome} />
    <Route exact path={DOWNLOAD_APPS_URL} component={DownloadApps} />
    <Route exact path={CHANGE_PASSWORD_URL} component={ChangePassword} />
    <Route exact path={CREATE_PASSWORD_URL} component={CreatePassword} />
    <Route exact path={CONFIRM_PASSWORD_URL} component={ConfirmPassword} />
    <Route exact path={PASSWORD_URL} component={Password} />
    <Route exact path={ACCOUNT_URL} component={Account} />
    <Route exact path={WHITELIST_URL} component={WhitelistedDapps} />
    <Route exact path={LOCKING_URL} component={LockingConfiguration} />
    <Route exact path={RESYNC_TOKEN_URL} component={ResyncToken} />
  </Switch>
)