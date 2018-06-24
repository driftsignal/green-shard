const dbRun = require('../model.js')

describe('Test Database', () => {
  it('connection', async () => {
    const res = await dbRun(['SELECT $1::text as message',
                             ['doom']])
    expect(res.rows[0].message).toBe('doom')
  })
})
