// @flow
import React from 'react';
import Auth from '../utils/Auth';
import Navbar from './Navbar';
const R = require('ramda');
const auth = new Auth();

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
    return (
      <div>
        <Navbar
          root="/"
          brandImage="/static/assets/probolinggo-dev.svg"
          brand="ProbolinggoDev"
          routes={routes}
        />
        {this.props.children}
      </div>
    );
  }
}
