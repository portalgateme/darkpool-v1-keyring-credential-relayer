const { ethers } = require("ethers")
const { httpRpcUrl, netId } = require('../config/config')
const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(httpRpcUrl, netId)
}
module.exports = getProvider