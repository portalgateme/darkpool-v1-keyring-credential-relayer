const { ethers } = require("ethers")
const { alchemyPrivateKey, networkName } = require('../config/config')
const getProvider = () => {
  return new ethers.providers.AlchemyProvider(networkName, alchemyPrivateKey)
}
module.exports = getProvider
