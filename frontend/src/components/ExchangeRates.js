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
        username
      }
    }
  }
  `);
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>
  return (
    <section>
      <ol type="1">
        {data?.pastes?.map((item, i) => (
          <li>
            {i+1}. ID-{item?.id} Tytuł {item?.title} Treść {item?.text} Autor_ID {item?.author.id} Autor {item?.author.username}
          </li>
        ))}
    </ol>
    </section >
  );
};
export default ExchangeRates