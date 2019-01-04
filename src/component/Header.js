import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo/variant1.png';
import Container from './Container';

const DEFAULT_BACKGROUND = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80';

export default function Header() {
  return (
    <Wrapper>
      <StyledNav>
        <Container>
          <div className="logo-wrapper">
            <a href="/">
              <img src={logo} alt="probolinggo dev" />
            </a>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>
                <a href="/">Project</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Github</a>
              </li>
            </ul>
          </div>
        </Container>
      </StyledNav>
      <StyledHeader
        style={{
          backgroundImage: `url(${DEFAULT_BACKGROUND})`,
        }}
      >
        <section>
          <Container>
            <article>
              <h1>Engineering Collaboration</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur voluptatibus sed totam harum consequatur perspiciatis,
                asperiores deleniti nobis quis cumque iusto dolores eos nemo
                quisquam adipisci inventore! Ut, explicabo aspernatur.
              </p>
            </article>
          </Container>
        </section>
      </StyledHeader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledHeader = styled.div`
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: black;

  > section {
    position: relative;
    z-index: 2;
    color: white;
    padding-top: 200px;
    article {
      max-width: 100%;
      @media (min-width: 1300px) {
        max-width: 40vw;
      }
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.32);
  }
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 25px 0;
  > div {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    justify-content: center;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .logo-wrapper {
    img {
      height: 30px;
    }
  }

  .nav-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        display: inline-block;
        margin-left: 20px;
      }
    }
  }
`;
