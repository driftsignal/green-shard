const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const lastBlock = require('./gs-eos.js')

// create graph central function
const mkgraph = async () => {
  const last = await lastBlock().catch(err => console.error(err))
  const schema = mkschema()
  const root = mkend(last)

  mkapp({schema, root, last})
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
function mkapp ({schema, root, last}) {
  const app = express()
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))

  app.set('json spaces', 60)
  app.get('/', (req, res) =>
          res.send(`<pre>${JSON.stringify(last, null, 1)}</pre>`))

  app.listen(4000)
  console.log('Running a GraphQL API server at localhost:4000/graphql')
}

mkgraph()
