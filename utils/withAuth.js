import React from 'react';
import Router from 'next/router';
import axios from 'axios';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();
  return class Authenticated extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        Router.push('/login');
      } else {
        this.setState({loading: false});
      }
    }

    render() {
      return (
        <div>
          {this.state.loading ? (
            <div>
              <br/>
            </div>
          ) : <AuthComponent {...this.props} auth={Auth}/>}
        </div>
      );
    }
  };
}
