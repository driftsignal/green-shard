const EosApi = require('eosjs-api')
const eos = EosApi()

async function lastId () {
  const info = await eos.getInfo({})
        .then(v => v["last_irreversible_block_num"])
        .catch(err => console.error(err))
  return info
}
async function lastBlock () {
  const last = await lastId()
  const block = await eos.getBlock(last)
        .catch(err => console.error(err))
  return block
}

module.exports = lastBlock
