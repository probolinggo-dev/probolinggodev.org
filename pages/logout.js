import React from 'react';
import Router from 'next/router';
import Auth from '../utils/Auth';

export default class Logout extends React.PureComponent {
  componentDidMount() {
    const auth = new Auth();
    auth.logout();
  }

  render() {
    return (
      <div></div>
    );
  }
}
