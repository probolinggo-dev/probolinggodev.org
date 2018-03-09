import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import AuthService from '../utils/AuthService';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Input from '../components/primitive/Input';
import {Link} from '../routes';
const Auth = new AuthService();

const LoginBox = styled.div`
  max-width: 500px;
  margin: 100px auto;
  background-color: white;
  padding: 40px 40px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Outer = styled.div`
  min-height: 100vh;
  /* background-color: #fada2b; */
  a {
    font-size: 1.3rem;
    margin-bottom: 15px;
    display: block;
    color: #2f2f2f;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  display: block;
  background: #2f2f2f;
  padding: 15px;
  font-size: 1.2rem;
  color: white;
  border-radius: 5px;
`;

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

  async handleLogin(e) {
    e.preventDefault();
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
      <Outer>
        <Container>
          <LoginBox>
            <center>
              <h1>Login</h1>
            </center>
            <form onSubmit={this.handleLogin}>
              <Input
                type="email"
                placeholder="Email Address"
                innerRef={element => {this.email = element;}}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                innerRef={element => {this.password = element;}}
                required
              />
              <div>
                <LoginButton type="submit">Login</LoginButton>
              </div>
            </form>
            <br/><br/>
            <Link route="/register">
              <a>Register Account</a>
            </Link>
            <Link route="/reset-password">
              <a>Forgot Password?</a>
            </Link>
          </LoginBox>
        </Container>
      </Outer>
    );
  }
}
