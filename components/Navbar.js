import React from 'react';
import styled from 'styled-components';
import Container from './Container';

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
      margin: 0 8px;
      &:first-child {
        margin-left: 0 !important;
        margin-right: 4px;
      }
      &:last-child {
        margin-right: 0;
        margin-left: 4px;
      }
      a {
        text-decoration: none;
      }
    }
  }
`;

export default class NavbarContainer extends React.PureComponent {
  render() {
    return (
      <div>
        <Container>
          <nav>
            <Menus>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">About</a></li>
              </ul>
            </Menus>
          </nav>
        </Container>
      </div>
    );
  }
}
