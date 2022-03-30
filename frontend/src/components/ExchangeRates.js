import React from 'react';
import { useQuery, gql } from "@apollo/client";
 
const ExchangeRates = () => {
  const { loading, error, data } = useQuery(gql`
  {
    pastes{
      id
      title
      text
      author {
        id
      }
    }
  }
  `);
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>
  return (
    <div>
      <h1>Hello Data</h1>
    </div>
  );
};
export default ExchangeRates