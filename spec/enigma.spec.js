const conf = require('../enigma.js')

describe('Get Secrets ', () => {
  it('actual secret is string', async () => {
    const secret = await conf('POSTGRES_PASSWORD', '')
    expect(typeof secret).toBe('string')
  })

  it('default no secret', async () => {
    const secret = await conf('not')
    expect(secret).toBe(null)
  })

  it('set default no secret', async () => {
    const secret = await conf('not', '')
    expect(secret).toBe('')
  })
})
