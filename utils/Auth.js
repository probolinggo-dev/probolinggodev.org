import auth0 from 'auth0-js';
import Router from 'next/router';
import config from '../config';
const {auth} = config;

export default class Auth {
  auth0 = new auth0.WebAuth({
    ...auth,
    responseType: 'token id_token',
    scope: 'openid profile',
  });
  userProfile;

  constructor() {
    this.handleAuth = this.handleAuth.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuth() {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        Router.push('/');
        throw err;
      }

      this.setSession(authResult);
    });
  }

  setSession(authResult) {
    if (typeof localStorage !== 'undefined') {
      // Set the time that the Access Token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      Router.push('/');
    }
  }

  logout() {
    if (typeof localStorage !== undefined) {
      // Clear Access Token and ID Token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // navigate to the home route
      Router.push('/');
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    if (typeof localStorage !== 'undefined') {
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }

  login() {
    this.auth0.authorize();
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No Access Token found');
    }
    return accessToken;
  }

  getUserProfile() {
    return new Promise((resolve, reject) => {
      const accessToken = this.getAccessToken();
      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (err) return reject(err);

        return resolve(profile);
      });
    });
  }
}
