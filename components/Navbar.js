// @flow
import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import {Link} from '../routes';
const R = require('ramda');

const Outer = styled.nav`
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
`;

const Menus = styled.div`
  flex: 1 0 0;
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

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #3e3e3e;
`;

type Props = {
  brand: string,
  brandImage?: string,
  routes: Array<{
    label: string,
    route: string,
    params?: any,
  }>,
};

export default class NavbarContainer extends React.PureComponent<Props> {
  render() {
    const {routes, brand} = this.props;
    return (
      <Outer>
        <Container noPadding>
          <Navbar>
            <Brand>
              {brand}
            </Brand>
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
          </Navbar>
        </Container>
      </Outer>
    );
  }
}
