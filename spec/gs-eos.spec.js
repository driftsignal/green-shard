const lastBlock = require('../gs-eos.js')

describe('gsEos', () => {
  it('verifies block number returned is number', async () => {
    const last = await lastBlock()
          .then(result => typeof (result['block_num'] || null))
    expect(last === 'number').toBe(true)
  })
})
