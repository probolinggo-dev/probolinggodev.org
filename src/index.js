import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <div>
        {routes.map((item, index) => {
          const { screen, ...rest } = item;
          const Component = require(`./screen/${screen}`).default;
          return <Route key={index} component={Component} {...rest} />;
        })}
      </div>
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
