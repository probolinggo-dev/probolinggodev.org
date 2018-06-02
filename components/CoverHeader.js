// @flow
import React from 'react';
import styled from 'styled-components';
import Container from './Container';

type Props = {
  backgroundUrl: string,
  title: string,
  subtitle: string,
};

// styled-components

const Outer = styled.div`
  background-image: url('${props => props.backgroundUrl}');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 70vh;
  position: relative;
  color: white;
  > .container {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 3rem;
    transform: translateX(-50%);
  }

  header {
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    small {
      font-size: 1.5rem;
      display: block;
      width: 80%;
    }
  }

  &:after {
    content: '';
    background-color: rgba(0, 0, 0, 0.47);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default class CoverHeader extends React.Component<Props> {
  render() {
    const {title, subtitle} = this.props;
    return (
      <Outer {...this.props}>
        <Container className="container">
          <header>
            <h1>{title}</h1>
            <small>{subtitle}</small>
          </header>
        </Container>
      </Outer>
    );
  }
}
