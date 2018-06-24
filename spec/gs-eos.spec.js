const lastBlock = require('../gs-eos.js')

// todo: get last in function and have it call
// tests so can abstract
describe('retrieved EOS block', () => {
  it('verifies block id returned is a string', async () => {
    const last = await lastBlock()
          .then(result => typeof (result['id'] || null))
    expect(last).toBe('string')
  })
  it('verifies block input_transactions returned is a array', async () => {
    const last = await lastBlock()
          .then(result => typeof (result['input_transactions'] || null))
    expect(last).toBe('object')
  })
})
