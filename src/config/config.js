require('dotenv').config()

const netId = Number(process.env.NET_ID) || 1

const zkCredentialUpdaterAddress = {
  netId1: "0xaa92cC5E77beAA554B1a57D479D90BC91d083335",
  netId11155111: "0xd38Eb8b08E4Cb15766d47EF80f91589829243e0A"
}

const rpcUrl = {
  netId1: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`,
  netId11155111: `https://eth-sepolia.g.alchemy.com/v2//${process.env.ALCHEMY_PRIVATE_KEY}`
}

module.exports = {
  netId,
  redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  networkName: process.env.NETWORK_NAME || '',
  alchemyPrivateKey: process.env.ALCHEMY_PRIVATE_KEY || '',
  httpRpcUrl: rpcUrl[`netId${netId}`],
  trustedForwarderAddress: process.env.TRUSTED_FORWARDER,
  privateKey: process.env.PRIVATE_KEY,
  port: process.env.APP_PORT || 8000,
  gasLimit: 1000000,
  minimumBalance: '500000000000000000',
  baseFeeReserve: Number(process.env.BASE_FEE_RESERVE_PERCENTAGE),
  updateCredentialAddress: zkCredentialUpdaterAddress[`netId${netId}`]
}
