// @flow
import React from 'react';
import {Link} from '../../routes';
import styled, {css} from 'styled-components';
const R = require('ramda');

const Outer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #00000080;
  top: 0;
  right: -100%;
  ${props => props.toggle && css`
    right: 0;
  `};
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 310px;
  min-width: 200px;
  background-color: white;
  height: 100%;
  overflow-y: auto;
  padding: 20px 30px;
  box-sizing: border-box;
  >ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
    font-size: 1.4rem;
    > li {
      margin-top: 15px;
      a {
        outline: none;
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

type Props = {
  toggle: boolean,
  routes: Array<{
    label: string,
    route: string | Array<{
      label: string,
      route: string,
    }>,
    params?: any,
  }>,
  onClose: () => any,
}

export default class MobileMenu extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    const self: any = this;
    self.handleOuterClick = self.handleOuterClick.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    const {toggle} = nextProps;
    const doc: any = document;

    if (toggle) {
      doc.body.style.overflow = 'hidden';
    } else {
      doc.body.style.overflow = 'auto';
    }
  }

  handleOuterClick(e: any) {
    e.stopPropagation();
    this.props.onClose();
  }

  render() {
    const {routes, toggle} = this.props;

    return (
      <Outer
        toggle={toggle}
        onClick={this.handleOuterClick}>
        <Menu>
          <ul>
            {R.or(routes, []).map((item, index) => {
              const {label, route, ...rest} = item;
              if (Array.isArray(route)) {
                return null;
              }
              return (
                <li key={index}>
                  <Link route={route} {...rest}>
                    <a>{label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Menu>
      </Outer>
    );
  }
}
