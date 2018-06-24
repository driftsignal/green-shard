const EosApi = require('eosjs-api')
const eos = EosApi()

// connect to docker to get and return last
// created block id
async function lastId () {
  let aerr = null
  const info = await eos.getInfo({})
        .then(v => v["last_irreversible_block_num"])
        .catch(err => aerr = err)
  if (aerr) return null
  return info
}

// get and return last created block data
async function lastBlock () {
  let aerr = null
  const last = await lastId()
        .catch(err => aerr = err)

  if (aerr || last === null ) return null

  const block = await eos.getBlock(last)
        .catch(err => aerr = err)
  if (aerr) return null

  return block
}

module.exports = lastBlock
