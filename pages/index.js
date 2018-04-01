import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '../components/Container';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import Layout from '../components/Layout';
const octokit = require('@octokit/rest')();
const R = require('ramda');
const config = require('../config');
const muiTheme = getMuiTheme({});


// components
import Jumbotron from '../components/Jumbotron';
import HeaderBox from '../components/HeaderBox';
import SectionHead from '../components/SectionHead';
import RepoCard from '../components/RepoCard';
import MemberCard from '../components/MemberCard';
import Button from '../components/primitive/Button';

export default class Index extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loading: false,
      isLoadingMembers: false,
      members: [],
      projects: [],
    };
  }

  componentDidMount() {
    const init = async () => {
      this.setState({
        loading: true,
        isLoadingMembers: true,
      });
      await octokit.authenticate({
        type: 'basic',
        username: config.github.username,
        password: config.github.password,
      });

      const res = await octokit.repos.getForOrg({
        org: 'probolinggo-dev',
        type: 'public'
      });
      const repos = await res.data;
      this.setState({
        projects: repos,
        loading: false,
      });

      const members = await octokit.orgs.getMembers({
        org: 'probolinggo-dev',
        type: 'public'
      });
      this.setState({
        isLoadingMembers: false,
        members: members.data,
      });
    };

    init();
  }

  render() {
    return (
      <Layout>
        <div style={{paddingBottom: '200px'}}>
          <Jumbotron>
            <Container>
              <HeaderBox>
                <h1>Dari Probolinggo, Untuk Dunia.</h1>
                <p>Kami adalah sebuah kelompok dari berbagai background yang berkumpul untuk berkolaborasi membuat impact untuk dunia, atau setidaknya untuk diri kita masing-masing. Kita percaya bahwa dunia ini akan terus menjadi tempat yang lebih baik ketika penghuninya terus bekerja sama, saling berbagi, dan memecahkan masalah.</p>
                <Button href="http://t.me/ProbolinggoDev" target="_blank">Join Telegram</Button>
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
                      <div className='outline'>
                        <a href={item.clone_url} target='_blank' className='title'>
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

          <Container>
            <SectionHead>
              <h2>Contributors</h2>
            </SectionHead>
            {this.state.isLoadingMembers
              ? (
                <p style={{
                  fontSize: '1.5rem',
                  textAlign: 'center',
                }}>
                  Loading Contributors ...
                </p>
              ) : (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                  {this.state.members.map(item => (
                    <MemberCard key={item.id}>
                      <img src={item.avatar_url} alt={item.login}/>
                      <a href={item.html_url} target='_blank'>@{item.login}</a>
                    </MemberCard>
                  ))}
                </div>
              )
            }
          </Container>
        </div>
      </Layout>
    );
  }
}
