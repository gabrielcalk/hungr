import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_NEW_FRIEND = gql`
  mutation newFriend($emailFriend: String!) {
    newFriend(emailFriend: $emailFriend) {
        _id
        username
        email
    }
  }
`;

export const DELETE_FRIEND_REQUEST = gql`
  mutation deleteFriendRequest($friendID: String!){
    deleteFriendRequest(friendID: $friendID){
      _id
    }
  }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation acceptFriendRequest($friendUsername: String!) {
    acceptFriendRequest(friendUsername: $friendUsername) {
      username
    }
  }
`;

export const DELETE_FRIEND = gql`
  mutation deleteFriend($friendUsername: String!){
    deleteFriend(friendUsername: $friendUsername){
      friends
    }
  }
`;

export const SAVE_RESTAURANT = gql`
mutation saveRestaurant ($restaurantData: RestaurantInput!) {
  saveRestaurant (restaurantData: $restaurantData) {
    _id
    username
    email
    savedRestaurants {
      restaurantId
      address
      hours
      image
      name
      description
      link
    }
  }
}`

export const DELETE_RESTAURANT = gql`
mutation deleteRestaurant ($restaurantId: ID!) {
  saveRestaurant (restaurantId: $restaurantId) {
    _id
    username
    email
    savedRestaurants {
      restaurantId
      address
      hours
      image
      name
      description
      link
    }
  }
}`
