import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const path = require('path');
const R = require('ramda');

export default class AuthService {
  constructor(endpoint) {
    this.endpoint = R.or(endpoint, 'https://api.probolinggodev.org/');
    this.login = this.login.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  async login(email, password) {
    try {
      const response = await axios.post(path.join(this.endpoint, 'auth'), {email, password});
      const {data} = response;
      const {token} = data;
      this.setToken(token);
      return Promise.resolve({message: 'success'});
    } catch (err) {
      return Promise.reject(err);
    }
  }

  loggedIn() {
    const token = this.getToken();
    return token === null ? false : true;
  }

  setToken(token) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('auth_token', token);
      return true;
    }
    return false;
  }

  getToken() {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
  }

  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('auth_token');
      return true;
    }
    return false;
  }
}
