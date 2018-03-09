import React from 'react';
import Router from 'next/router';
import AuthService from '../utils/AuthService';

export default class Logout extends React.PureComponent {
  componentDidMount() {
    const Auth = new AuthService;
    if (Auth.logout()) {
      Router.push('/');
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}
