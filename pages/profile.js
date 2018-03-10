import React from 'react';
import axios from 'axios';
const R = require('ramda');
const config = require('../config');

export default class Profile extends React.PureComponent {
  static async getInitialProps ({query}) {
    const {username} = query;
    try {
      const response = await axios.get(`${config.apiEndpoint}/user/${username}`);
      const {data} = response;
      return {
        data,
      };
    } catch (err) {
      if (err) return {data: null};
    }
  }

  render() {
    const {data} = this.props;
    return (
      <div>
        {R.isNil(data) ? 'user tidak ditemukan' : 'resolved'}
      </div>
    );
  }
}
