const request = require('request')

const baseUrl = 'http://localhost:4000/'

describe('Web Server', () => {
  ['graphql', '/'].forEach(v => {
    it(`${v} returns status code 200`, () => {
      request.get(baseUrl + v, (err, res, body) =>
                expect(res.statusCode).toBe(200))
    })
  })
})
