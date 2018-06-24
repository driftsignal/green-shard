const conf = require('./enigma.js')
const { Client } = require('pg')

// connect to database and get results
//   aquery - sql query in form of [string, [values]]
// return results of aquery
const dbRun = async (aquery) => {
  const client = new Client({
    host: await conf('POSTGRES_HOST'),
    port: await conf('POSTGRES_PORT'),
    user: await conf('POSTGRES_USER'),
    password: await conf('POSTGRES_PASSWORD')
  })

  await client.connect()
    .catch(err => console.error('connecion error', err.stack))

  const res = await client.query(...aquery)
  await client.end()

  return res
}

module.exports = dbRun
