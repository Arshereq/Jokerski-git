import { gql } from "@apollo/client";


export const READ_PASTES = gql`
  query pastes {
    pastes {
      id
      title
      text
      author {
        id
        username
      }
    }
  }
`;
