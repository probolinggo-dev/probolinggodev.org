// @flow
import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import MobileMenu from './mobileMenu';
import {Link} from '../../routes';
const R = require('ramda');

const Outer = styled.div`
  backface-visibility: hidden;
  width: 100%;
  z-index: 99;
  background-color: #ffffff;
  border-bottom: solid #dadada 1px;
  box-shadow: -1px 1px 3px 0px #00000036;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

const Menus = styled.div`
  flex: 1 0 0;
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
  >ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1 0 0;
    justify-content: flex-end;
    >li {
      margin: 0 15px;
      &:first-child {
        margin-left: 0 !important;
        margin-right: 7.5px;
      }
      &:last-child {
        margin-right: 0;
        margin-left: 7.5px;
      }
      a {
        outline: none;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 1.3rem;
        font-weight: 600;
        display: inline-block;
        text-decoration: none;
        color: #5a5a5a;
        &:hover {
          color: #000000;
        }
        &:active {
          color: #000000;
        }
      }
    }
  }
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #3e3e3e;
  @media (max-width: 767px) {
    flex: 1 0 0;
  }
  img {
    height: 40px;
    width: 110px;
    display: block;
  }
`;

const ToggleMenuButton = styled.button`
  border: solid #454849 2px;
  background: transparent;
  padding: 9px 20px;
  font-size: 1rem;
  border-radius: 5px;
  background-color: white;
  text-transform: uppercase;
  font-weight: 600;
  outline: none;
  @media (min-width: 767px) {
    display: none;
  }
`;

type Props = {
  root?: string,
  brand: string,
  brandImage?: string,
  routes: Array<{
    label: string,
    route: string,
    params?: any,
  }>,
};

type State = {
  toggleMobileMenu: boolean,
}

export default class NavbarContainer extends React.PureComponent<Props, State> {
  state = {
    toggleMobileMenu: false,
  }

  constructor(props: Props) {
    super(props);
    const self: any = this;
    self.handleMenuClick = self.handleMenuClick.bind(this);
    self.handleMobileMenuClose = self.handleMobileMenuClose.bind(this);
  }

  handleMenuClick(e: any) {
    e.preventDefault();
    this.setState({
      toggleMobileMenu: true,
    });
  }

  handleMobileMenuClose() {
    this.setState({
      toggleMobileMenu: false,
    });
  }

  render() {
    const {
      routes,
      brand,
      brandImage,
      root,
    } = this.props;
    const {toggleMobileMenu} = this.state;
    return (
      <Outer>
        <Container noPadding>
          <Navbar>
            <Brand>
              {brandImage ? (
                <Link route={R.or(root, '/')}>
                  <a><img src={brandImage} alt={brand}/></a>
                </Link>
              ) : (
                <Link route={R.or(root, '/')}>
                  <a>{brand}</a>
                </Link>
              )}
            </Brand>
            <ToggleMenuButton
              onClick={this.handleMenuClick}>
              Menu
            </ToggleMenuButton>
            <Menus>
              <ul>
                {R.or(routes, []).map((item, index) => {
                  const {label, ...rest} = item;
                  return (
                    <li key={index}>
                      <Link {...rest}>
                        <a>{label}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Menus>
            <MobileMenu
              toggle={toggleMobileMenu}
              onClose={this.handleMobileMenuClose}
              routes={routes} />
          </Navbar>
        </Container>
      </Outer>
    );
  }
}
