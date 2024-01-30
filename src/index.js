import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';
/**
 * 1. We import all the dependencies we need to wire up the Apollo client, all from @apollo/client.
 */
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

/**
 * 2. We create the httpLink that will connect our ApolloClient instance with the GraphQL API.
 * The GraphQL server will be running on http://localhost:4000.
 */
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

/**
 * 3. We instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache.
 */
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

/**
 * 4. Finally, we render the root component of our React app.
 * The App is wrapped with the higher-order component ApolloProvider that gets passed the client as a prop.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
