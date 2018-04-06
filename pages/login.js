import React from 'react';
import Auth from '../utils/Auth';
const auth = new Auth();

export default class Login extends React.PureComponent {
  componentDidMount() {
    auth.login();
  }
  render() {
    return <div>Redirecting ...</div>;
  }
}
