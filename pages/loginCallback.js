import React from 'react';
import Auth from '../utils/Auth';
const auth = new Auth();

export default class LoginCallback extends React.PureComponent {
  componentDidMount() {
    auth.handleAuth();
  }

  render() {
    return <div>loading</div>;
  }
}
