import React from 'react';

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    const EXCHANGE_RATES = gql`
    query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }`

client
.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `
})
.then(result => console.log(result));

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }
export default ExchangeRates