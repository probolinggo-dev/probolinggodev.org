import React from 'react';
import Router from 'next/router';
import axios from 'axios';
import Auth from './Auth';

export default function withAuth(AuthComponent) {
  const auth = new Auth();
  return class Authenticated extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      if (!auth.isAuthenticated()) {
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
          ) : <AuthComponent {...this.props} auth={auth}/>}
        </div>
      );
    }
  };
}
