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

const QuoteCard = styled.div`
  margin-top: 50px;
  >blockquote {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    &:after {
      content: "''";
      font-weight: bold;
    }
    &:before {
      content: "''";
      font-weight: bold;
    }
  }
  .author {
    font-size: 1.5rem;
    font-weight: bold;
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

export default class Profile extends React.PureComponent {
  static async getInitialProps ({query}) {
    const {username} = query;
    try {
      const response = await axios.get(`${config.apiEndpoint}/user/${username}`);
      const {data} = response;
      const unsplash = await axios.get(`${config.apiEndpoint}/unsplash/random`);
      return {
        endpoint: config.apiEndpoint,
        username,
        data,
        coverImage: unsplash.data.urls.regular,
      };
    } catch (err) {
      if (err) return {data: null};
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      fetchingQuote: false,
      quotes: [],
      currentPage: 1,
      totalPage: 0,
    };
    this._fetchQuote = this._fetchQuote.bind(this);
  }

  componentDidMount() {
    this._fetchQuote();
  }

  async _fetchQuote() {
    try {
      this.setState({fetchingQuote: true});
      const {username, endpoint} = this.props;
      const {currentPage} = this.state;
      const quotes = await axios.get(`${endpoint}/user/${username}/quotes?per_page=10&page=${currentPage}`);
      const {data} = quotes;
      const {docs} = data;

      this.setState(prevState => ({
        quotes: [
          ...prevState.quotes,
          ...docs,
        ],
        fetchingQuote: false,
        currentPage: prevState.currentPage + 1,
        totalPage: data.pages,
      }));
    } catch (err) {
      this.setState({fetchingQuote: false});
    }
  }

  render() {
    const {data, coverImage} = this.props;
    const canFetch = !this.state.fetchingQuote;
    if (R.isNil(data)) {
      return (<div>User Not Found!</div>);
    }
    const FetchButton = () => (
      <LoginButton
        onClick={this._fetchQuote}
        disabled={!canFetch}
      >
        {canFetch ? 'Load More' : 'Fetching Quotes'}
      </LoginButton>
    );
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
          <div>
            {this.state.quotes.map(item => (
              <QuoteCard key={item.quote._id}>
                <blockquote>
                  {item.quote.content}
                </blockquote>
                <div className="author">
                  ~ {item.quote.author}
                </div>
              </QuoteCard>
            ))}
          </div>
          <br/><br/>
          {this.state.currentPage >= this.state.totalPage ? null : FetchButton()}
          <br/><br/><br/>
        </Container>
      </Layout>
    );
  }
}
