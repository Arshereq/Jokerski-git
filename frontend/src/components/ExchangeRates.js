import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


  const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "AUD") {
      currency
      rate
    }
    openExchangeRates @rest(type: "openExchangeRates", path: "/latest", endpoint: "openExchangeRate") {
      rates
    }
  }
`;

function ExchangeRates() {
    const { data, loading, error } = useQuery(EXCHANGE_RATES);

    if (loading) {
        return <div>loading</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }
    
      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
  }
export default ExchangeRates