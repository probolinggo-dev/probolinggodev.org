// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/variant1.png';
import Container from './Container';

const DEFAULT_BACKGROUND = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80';

const DEFAULT_MENU = [
  {
    path: '/about',
    label: 'About',
  },
];

type Menu = {
  path: string,
  label: string,
}

type Props = {
  title: string,
  description: string,
  menus: [Menu],
}

export default function Header(props: Props) {
  const { title, description, menus = DEFAULT_MENU } = props;
  const [mobileMenuVisible, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu(!mobileMenuVisible);

  return (
    <Wrapper>
      <StyledNav>
        <Container>
          <div className="logo-wrapper">
            <Link to="/">
              <img src={logo} alt="probolinggo dev" />
            </Link>
          </div>
          <div
            className="nav-wrapper"
            style={{
              left: mobileMenuVisible ? '0' : '-100%',
            }}
          >
            <ul>
              {menus.map((n, i) => (
                <li key={i}>
                  <Link to={n.path}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <MenuButton onClick={toggleMenu}>menu</MenuButton>
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
              <h1>{title}</h1>
              <p>
                {description}
              </p>
            </article>
          </Container>
        </section>
      </StyledHeader>
    </Wrapper>
  );
}

const MenuButton = styled.button`
  color: white;
  font-weight: bold;
  border: none;
  background: transparent;
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

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
  @media (max-width: 768px) {
    padding: 10px 0;
  }
  > div {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .logo-wrapper {
    img {
      height: 30px;
      @media (max-width: 768px) {
        height: 25px;
      }
    }
  }

  .nav-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
      position: fixed;
      padding-top: 50px;
      top: 0;
      left: -100%;
      background: black;
      height: 100vh;

      ul {
        > li {
          display: block !important;
          padding: 10px 60px !important;
        }
      }
    }

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
