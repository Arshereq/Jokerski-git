import { gql } from "@apollo/client";

export const CREATE_PASTES = gql`
  mutation createPaste(
    $title: String!
    $author: String!
    $text: String!
    $visibility: Boolean!
    $expireAfter: String!
    ){
    createPaste(
      title: $title
      author: $author
      text: $text
      visibility: $visibility
      expireAfter: $expireAfter
      ){
        paste{
          id
        }
      }
  }
`;