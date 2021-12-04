const {gql} = require('apollo-server-express')


const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    friends: [String]!
  }

  type Friends{
    _id: ID!
    userID: String
    friendUsername: String
    friendID: String
    status: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
    meFriendRequest: [Friends]!
  }

  type Mutation {
    login(username: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    newFriend(emailFriend: String!): User
    deleteFriendRequest(friendID: String!): User
  }

`

module.exports = typeDefs;
