import {
  MAINNET,
  RINKEBY,
  NETWORK_NAME,
  NETWORK_VERSION,
  NETWORK_URL
} from './names'

export const networkConfig = {
  [MAINNET]: {
    [NETWORK_NAME]: 'Mainnet',
    [NETWORK_VERSION]: 1,
    [NETWORK_URL]: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID
  },
  [RINKEBY]: {
    [NETWORK_NAME]: 'Rinkeby',
    [NETWORK_VERSION]: 4,
    //[NETWORK_URL]: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID
    [NETWORK_URL]: 'https://rinkeby.infura.io/ip5Qu2JWrzVWIF36bm8S'
  }
}

export default networkConfig
