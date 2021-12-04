import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_FRIENDS_REQUESTS = gql`
  {
    meFriendRequest {
      status
      userID
      friendID
    }
  }
`;