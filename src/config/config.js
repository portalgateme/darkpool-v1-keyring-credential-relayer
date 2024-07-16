require('dotenv').config()

const netId = Number(process.env.NET_ID) || 1

const zkCredentialUpdaterAddress = {
  netId1: "0x3fe89A8330c0b8397149759e071fA02f9D9A1374",
  netId11155111: "0xdd208aBd0df25de9b507b8Dd84A3B16fdf725b4F"
}

const rpcUrl = {
  netId1: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`,
  netId11155111: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`
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
