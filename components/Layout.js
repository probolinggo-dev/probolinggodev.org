// @flow
import React from 'react';
import Head from 'next/head';
import Auth from '../utils/Auth';
import Navbar from './Navbar';
import nprogress from 'nprogress';
import Router from 'next/router';
const R = require('ramda');
const auth = new Auth();

Router.onRouteChangeStart = () => nprogress.start();

Router.onRouteChangeComplete = () => nprogress.done();
Router.onRouteChangeError = () => nprogress.done();

const routes = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Tools',
    route: [
      {
        label: 'Ex Dropdown 1',
        route: '/about',
      },
      {
        label: 'Ex Dropdown 2',
        route: '/about',
      },
      {
        label: 'Ex Dropdown 3',
        route: '/about',
      },
      {
        label: 'Ex Dropdown 4',
        route: '/about',
      },
    ]
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
