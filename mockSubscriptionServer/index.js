// https://github.com/prismagraphql/graphql-yoga/tree/master/examples/subscriptions

const { GraphQLServer, PubSub } = require('graphql-yoga')
const { makeExecutableSchema } = require("graphql-tools");
const { subscribeLogs, getOldLogs } = require("./mockLogs.js");

const typeDefs = `
  type Log {
    uuid: String
    log: String
    createdAt: String
  }

  type Subscription {
    log: Log!
  }

  type Query {
    logs: [Log]
  }
`

const resolvers = {
  Query: {
    logs: () => {
      const date = new Date()
      date.setMinutes(date.getMinutes() - 10)
      return getOldLogs(date)
    }
  },
  Log: {
    uuid: log => log.uuid,
    createdAt: log => log.createdAt,
    log: log => log.log
  },
  Subscription: {
    log: {
      subscribe: (parent, args, { pubsub }) => {
        // start firing logs
        subscribeLogs(pubsub)
        return pubsub.asyncIterator('log')
      },
    }
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const pubsub = new PubSub()
const server = new GraphQLServer({
  schema,
  debug: true,
  context: ({ response, request, connection }) => {
    const authorization = connection.context.authorization
    // validate auth and throw error if invalid
    if (!authorization) throw new Error('Invalid authentication');
    console.log('token:' + authorization)
    return { pubsub, authorization };
  },
})

server.start(() => console.log('Server is running on localhost:4000'))
