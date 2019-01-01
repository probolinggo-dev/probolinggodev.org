import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './routes';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <Router>
    <div>
      {routes.map((item, index) => {
        const {screen, ...rest} = item;
        const Component = require(`./screen/${screen}`).default;
        return <Route key={index} component={Component} {...rest} />;
      })}
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
