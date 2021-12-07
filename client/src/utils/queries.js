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
      friendUsername
    }
  }
`;

export const QUERY_FRIENDS = gql`
  {
    meFriends{
      friends
    }
  }
`

export const QUERY_RESTAURANTS_REQUEST = gql`
{
  meRestaurantsRequests{
    principalUser
    _id
    guestUsername
    inputs
    principalMealPreferences
  }
}
`

export const QUERY_DATES_ACCEPT = gql`
{
  meDates{
		restaurantMatches
    status
    principalUser
    guestUsername
  }
}
`