const {gql} = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    friends: [String]
  }

  type FriendsInvitations{
    _id: ID!
    userID: String
    friendUsername: String
    friendID: String
    status: String
  }

  type Meal {
    _id: ID!
    principalUser: String!
    guestUsername: String!
    inputs: String!
    principalMealPreferences: [String]
    restaurantMatches: [String]
    status: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User!
    meFriendRequest: [FriendsInvitations]!
    meFriends: User
    meRestaurantsRequests: [Meal]!
    meDates: [Meal]!
  }

  type Mutation {
    login(username: String!, password: String!): Auth!
    addUser(username: String!, email: String!, password: String!): Auth!
    newFriend(emailFriend: String!): User
    deleteFriendRequest(friendID: String!): User
    acceptFriendRequest(friendUsername: String!): User
    deleteFriend(friendUsername: String!): User 
    createOneMeal(guestUsername: String!, inputs: String!): Meal!
    addRestaurant(principalMealPreferences: String): Meal!
    addMatches(_id: String!, restaurantMatches: String!): Meal!
  }

`

module.exports = typeDefs;
