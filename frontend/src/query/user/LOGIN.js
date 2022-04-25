import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation tokenAuth(
    $username: String!
    $password: String!
  ) {
    tokenAuth(
      username: $username
      password: $password
    ) {
      success
      errors
      unarchiving
      token
      refreshToken
      unarchiving
      user {
        id
        username
      }
    }
  }
`;
