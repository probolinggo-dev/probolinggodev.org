// @flow
import React from 'react';
import AuthService from '../utils/AuthService';
import Navbar from './Navbar';
const R = require('ramda');
const Auth = new AuthService;

const routes = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  }
];

type Props = {
  children: any,
};

export default class Layout extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const extendsRoutes = [
      ...routes,
      {
        label: Auth.loggedIn() ? 'Logout' : 'Login',
        route: Auth.loggedIn() ? '/logout' : '/login',
      }
    ];
    return (
      <div>
        <Navbar
          root="/"
          brandImage="/static/assets/probolinggo-dev.svg"
          brand="ProbolinggoDev"
          routes={extendsRoutes}
        />
        {this.props.children}
      </div>
    );
  }
}
