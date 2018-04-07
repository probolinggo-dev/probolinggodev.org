// @flow
import React from 'react';
import Container from '../Container';
import MobileMenu from './mobileMenu';
import DropdownMenu from './dropdownMenu';
import Auth from '../../utils/Auth';
import {Link} from '../../routes';
import {
  Outer,
  Navbar,
  Menus,
  Brand,
  ToggleMenuButton,
  ProfileThumb,
  ProfileImage
} from './style-component';
const R = require('ramda');
const auth = new Auth();

type Props = {
  root?: string,
  brand: string,
  brandImage?: string,
  routes: Array<{
    label: string,
    route: string | Array<{
      label: string,
      route: string,
    }>,
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
                  const {label, route, ...rest} = item;
                  if (Array.isArray(route))
                    return (
                      <li key={index}>
                        <DropdownMenu label={label} route={route} />
                      </li>
                    );

                  return (
                    <li key={index}>
                      <Link route={route} {...rest}>
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
