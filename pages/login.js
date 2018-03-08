import React from 'react';
import Router from 'next/router';
import AuthService from '../utils/AuthService';
const Auth = new AuthService();

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (Auth.loggedIn()) {
      Router.push('/');
    }
  }

  async handleLogin() {
    const email = this.email.value;
    const password = this.password.value;
    try {
      const login = Auth.login(email, password);
      Router.push('/');
    } catch (err) {
      alert('auth failed');
    }
  }

  render() {
    return (
      <div>
        <div>
          <label>email</label>
          <input type="text" ref={element => {this.email = element;}}/>
        </div>
        <div>
          <label>password</label>
          <input type="password" ref={element => {this.password = element;}}/>
        </div>
        <div>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}
