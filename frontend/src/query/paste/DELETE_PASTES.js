import { gql } from "@apollo/client";


export const DELETE_PASTES = gql`
  mutation deletePaste($id: Int!) {
    deletePaste(id: $id){
    message
    }
  }
`;