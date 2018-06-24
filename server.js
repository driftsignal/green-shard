const path = require('path')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const lastBlock = require('./gs-eos.js')

// create graph central function return created app
const mkgraph = async (port = 4000) => {
  const last = await lastBlock().catch(err => console.error(err))
  const schema = mkschema()
  const root = mkend(last)

  return mkapp({port, schema, root, last})
}

// makes and returns the graphql schema
function mkschema () {
  return buildSchema(`
  type Query {
    last: Block
  },
  type Block {
    hash: String
    actions: Int
  }
`)
}

// makes and returns endpoints
//   last - most recent block element
function mkend (last) {
  // The root provides a resolver function for each API endpoint
  return {
    last: () => {
      return {hash: last.id,
              actions: last.input_transactions.length}
    }
  }
}

// makes app and routes
//   port - port app runs on
//   schema - graphql layout
//   root - grapql resolvers
//   last - most recent block element
// returns app
function mkapp ({port, schema, root, last}) {
  const app = express()
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'slm')
  app.set('json spaces', 60)

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))

  app.get('/', (req, res) => {
    const lastJson = req.query.getLast
          ? JSON.stringify(last, null, 2) : null
    app.render('index', {isLast: lastJson}, (err, htm) => {
      err ? res.send(500) : res.send(htm)
    })
  })

  app.listen(port)
  console.log('Running a GraphQL API server at localhost:4000/graphql')
  return app
}

module.exports = mkgraph

if (require.main === module) mkgraph()
