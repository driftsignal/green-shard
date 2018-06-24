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

  let aerr = null

  await client.connect().catch(err => aerr = err)
  if (aerr) return null

  const res = await client.query(...aquery).catch(err => aerr = err)
  if (aerr) return null
  await client.end().catch(err => aerr = err)
  if (aerr) return null

  return res
}

module.exports = dbRun

if (require.main === module) {
  dbRun(['SELECT $1::text as message', ['doom']])
    .then(res => console.log(res.rows[0].message))
}
