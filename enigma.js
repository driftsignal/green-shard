const fs = require('fs')
const ini = require('ini')
const util = require('util')

// not sure it isn't better to just use
// readFileSync but interesting

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile)

// get configuration and secrets form .env
//   name - name of value to retrieve
//   defval - default value to return if name doesn't exist
// return value of name or defval
const getConf = async (name, defval = null) => {
  const secrets = await readFile('./.env', 'utf-8')
  var config = ini.parse(secrets)
  return config[name] || defval
}

module.exports = getConf
