const {gql} = require('apollo-server-express')


const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    friends: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
  }

  type Mutation {
    login(username: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    newFriend(emailFriend: String!): User
  }

`

module.exports = typeDefs;
