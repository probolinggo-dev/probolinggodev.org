import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const path = require('path');
const R = require('ramda');

export default class AuthService {
  constructor(endpoint) {
    this.endpoint = R.or(endpoint, 'http://localhost:8000');
    this.login = this.login.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.endpoint}/auth`, {email, password});
      const {data} = response;
      const {token} = data;
      axios.defaults.headers.common['x-access-token'] = token;
      const infoResponse = await axios.get(`${this.endpoint}/user/info`);
      this.setInfo(JSON.stringify(infoResponse.data));
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

  setInfo(info) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('user_info', info);
    }
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
      localStorage.removeItem('user_info');
      return true;
    }
    return false;
  }
}
