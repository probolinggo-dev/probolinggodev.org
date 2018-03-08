// @flow
import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import {Link} from '../routes';
const R = require('ramda');

const Outer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  width: 100%;
  z-index: 99;
  background-color: #ffffff;
  border-bottom: solid #dadada 1px;
  box-shadow: -1px 1px 3px 0px #00000036;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
`;

const Menus = styled.div`
  display: flex;
  >ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex: 1 0 0;
    justify-content: flex-end;
    >li {
      margin: 0 12px;
      &:first-child {
        margin-left: 0 !important;
        margin-right: 6px;
      }
      &:last-child {
        margin-right: 0;
        margin-left: 6px;
      }
      a {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 1.1rem;
        display: inline-block;
        text-decoration: none;
      }
    }
  }
`;

type Props = {
  routes: Array<{
    label: string,
    route: string,
    params: any,
  }>,
};

export default class NavbarContainer extends React.PureComponent<Props> {
  render() {
    const {routes} = this.props;
    return (
      <Outer>
        <Container noPadding>
          <nav>
            <Menus>
              <ul>
                {R.or(routes, []).map((item, index) => {
                  const {label, ...rest} = item;
                  return (
                    <li key={index}>
                      <Link {...rest}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </Menus>
          </nav>
        </Container>
      </Outer>
    );
  }
}
