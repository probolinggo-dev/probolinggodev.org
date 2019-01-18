import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import Footer from './component/Footer';
import * as serviceWorker from './serviceWorker';

const customHistory = createBrowserHistory();
let prevLocation;

const isProd = process.env.NODE_ENV === 'production';

const client = new ApolloClient({
  uri: isProd ? `${window.location.origin}/graphql` : 'http://localhost:5000/graphql',
});

const ScrollRestoration = Page => {
  return props => {
    const { location } = props;
    if (location.pathname !== prevLocation) {
      window.scrollTo(0, 0);
    }
    prevLocation = location.pathname;
    return <Page {...props} />;
  };
};

const App = () => (
  <Router history={customHistory}>
    <ApolloProvider client={client}>
      <div>
        {routes.map((item, index) => {
          const { screen, ...rest } = item;
          const Component = require(`./screen/${screen}`).default;
          return <Route key={index} component={ScrollRestoration(Component)} {...rest} />;
        })}
        <Footer />
      </div>
    </ApolloProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
