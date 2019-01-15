import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Container from './Container';

ReactGA.initialize('UA-132442251-1');
ReactGA.pageview('/home');

export default () => (
  <Footer>
    <Container>
      <p>ProbolinggoDev &copy; 2019</p>
    </Container>
  </Footer>
);

const Footer = styled.footer`
  padding: 20px 0;
  background: #eaeaea;
  margin-top: 100px;
`;
