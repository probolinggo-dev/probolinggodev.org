// @flow
import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import MobileMenu from './mobileMenu';
import Auth from '../../utils/Auth';
import {Link} from '../../routes';
const R = require('ramda');
const auth = new Auth();

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

const ProfileThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  a {
    color: #dea426 !important;
  }

  .child {
    position: absolute;
    background: white;
    min-width: 170px;
    right: 0;
    top: 110%;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 14px 3px #00000036;

    > ul {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: right;
      line-height: 1.7;
      font-size: 1.2rem;
      font-weight: 500;
      > li {
        a {
          padding: 0;
          color: #454849 !important;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const ProfileImage = styled.img`
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
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
  isAuthenticated: boolean,
  toggleProfile: boolean,
  profile: {
    name: string,
    nickname: string,
    picture: string,
    sub: string,
    updated_at: string,
  },
}

export default class NavbarContainer extends React.PureComponent<Props, State> {
  state = {
    toggleMobileMenu: false,
    isAuthenticated: false,
    toggleProfile: false,
    profile: {
      name: '',
      nickname: '',
      picture: '',
      sub: '',
      updated_at: '',
    }
  }

  constructor(props: Props) {
    super(props);
    const self: any = this;
    self.handleMenuClick = self.handleMenuClick.bind(this);
    self.handleMobileMenuClose = self.handleMobileMenuClose.bind(this);
    self.toggleProfile = self.toggleProfile.bind(this);
  }

  async componentDidMount() {
    if (auth.isAuthenticated()) {
      const profile = await auth.getUserProfile();
      this.setState({
        isAuthenticated: true,
        profile,
      });
    }
  }

  toggleProfile(e: any) {
    e.preventDefault();
    this.setState(prevState => ({toggleProfile: !prevState.toggleProfile}));
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
    const {toggleMobileMenu, profile} = this.state;
    const {name, nickname, picture} = profile;

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
                <li>
                  {this.state.isAuthenticated
                    ? (
                      <ProfileThumb onClick={this.toggleProfile}>
                        <a>@{nickname}</a>
                        <ProfileImage src={picture} alt={name} />
                        {this.state.toggleProfile
                          ? (
                            <div className="child">
                              <ul>
                                <li>
                                  <Link route="/logout">
                                    <a>Logout</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          ) : null }
                      </ProfileThumb>
                    ) : <Link route="/login"><a>Login</a></Link>}
                </li>
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
