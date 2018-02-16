import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '../components/Container';
const octokit = require('@octokit/rest')();
const R = require('ramda');
const config = require('../config');

const Jumbotron = styled.div`
  background-color: black;
  background-image: url('https://images.unsplash.com/photo-1495510096779-5fbe73258c83?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=553db17bf3181cc07a29ccbadb0302ee&auto=format&fit=crop&w=3298&q=80');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const HeaderBox = styled.div`
  text-align: center;
  padding: 80px 0;
  color: white;

  @media (max-width: 720px) {
    padding: 40px 20px;
  }

  h1 {
    font-family: 'Nanum Pen Script', cursive, serif;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const SectionHead = styled.div`
  text-align: center;
  padding: 20px 0;
  h2 {
    font-size: 2rem;
  }
`;

const RepoCard = styled.div`
  box-sizing: border-box;
  flex: 50% 0 0;
  padding: 7.5px;

  @media (max-width: 920px) {
    flex: 90% 0 0;
  }

  >.outline {
    padding: 7.5px;
    text-align: center;
  }
  a {
    color: #da9600;
    text-decoration: none;
    &:hover {
      color: #fcad00;
      text-decoration: overline;
    }
  }
  p {
    margin-top: 0;
    font-size: 1.8rem;
  }
`;

export default class Index extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loading: false,
      projects: [],
    };
  }

  componentDidMount = async () => {
    this.setState({loading: true});
    await octokit.authenticate({
      type: 'basic',
      username: config.github.username,
      password: config.github.password,
    });

    const res = await octokit.repos.getForOrg({
      org: 'probolinggo-dev',
      type: 'public'
    })
    const repos = await res.data;
    console.log(repos);
    this.setState({
      projects: repos,
      loading: false,
    });
  }

  render() {
    return (
      <div style={{paddingBottom: '200px'}}>
        <Jumbotron>
          <Container>
            <HeaderBox>
              <h1>Dari Probolinggo, Untuk Dunia.</h1>
              <p>Kami adalah sebuah kelompok dari berbagai background yang berkumpul untuk berkolaborasi membuat impact untuk dunia, atau setidaknya untuk diri kita masing-masing. Kita percaya bahwa Dunia ini akan terus menjadi tempat yang lebih baik ketika penghuninya terus bekerja sama, saling berbagi, dan memecahkan masalah.</p>
            </HeaderBox>
          </Container>
        </Jumbotron>

        <Container>
          <SectionHead>
            <h2>OpenSource Projects</h2>
          </SectionHead>
          {this.state.loading
            ? (
              <p style={{
                fontSize: '1.5rem',
                textAlign: 'center',
              }}>
                Loading Repositories ...
              </p>
            ) : (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                {this.state.projects.map(item => (
                  <RepoCard key={item.id}>
                    <div className="outline">
                      <a href={item.clone_url} target="_blank" className="title">
                        <h2>{item.name}</h2>
                      </a>
                      <p>{R.or(item.description, 'This repo doesn\'t have description yet!')}</p>
                    </div>
                  </RepoCard>
                ))}
              </div>
            )
          }
        </Container>
      </div>
    );
  }
}
