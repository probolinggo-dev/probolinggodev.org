import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Container';
const R = require('ramda');
const config = require('../config');

const CoverImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 390px;
  > img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ProfileBox = styled.div`
  display: flex;
  margin-top: -150px;
  position: relative;
  color: white;
  padding: 0 30px;
  >.name {
    flex: 1 0 0;
    padding-left: 25px;
    h2 {
      font-size: 2rem;
      padding-top: 20px;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    }
  }
  > img.profilePicture {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
`;

export default class Profile extends React.PureComponent {
  static async getInitialProps ({query}) {
    const {username} = query;
    try {
      const response = await axios.get(`${config.apiEndpoint}/user/${username}`);
      const {data} = response;
      const unsplash = await axios.get(`${config.apiEndpoint}/unsplash/random`);
      return {
        data,
        coverImage: unsplash.data.urls.regular,
      };
    } catch (err) {
      if (err) return {data: null};
    }
  }

  render() {
    const {data, coverImage} = this.props;
    if (R.isNil(data)) {
      return (<div>User Not Found!</div>);
    }
    return (
      <Layout>
        <Container noPadding>
          <CoverImage>
            <img src={coverImage} alt=""/>
          </CoverImage>
          <ProfileBox>
            <img src={data.meta.profilePicture} alt={data.name} className="profilePicture"/>
            <div className="name">
              <h2>{data.name}</h2>
            </div>
          </ProfileBox>
        </Container>
      </Layout>
    );
  }
}
