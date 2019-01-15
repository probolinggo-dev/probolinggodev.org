import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import Footer from './component/Footer';
import * as serviceWorker from './serviceWorker';


ReactGA.initialize('UA-132442251-1');
ReactGA.pageview('/home');

const isProd = process.env.NODE_ENV === 'production';

const client = new ApolloClient({
  uri: isProd ? `${window.location.origin}/graphql` : 'http://localhost:5000/graphql',
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
        <Footer />
      </div>
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
