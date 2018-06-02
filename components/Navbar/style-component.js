import styled from 'styled-components';

export const Outer = styled.div`
  backface-visibility: hidden;
  width: 100%;
  z-index: 99;
  background-color: #ffffff;
  border-bottom: solid #dadada 1px;
  box-shadow: -1px 1px 3px 0px #00000036;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

export const Menus = styled.div`
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
      position: relative;
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
        &.caret {
          position: relative;
          margin-right: 13px;
          &:after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            background-image: url(/static/assets/icons/caret.svg);
            background-size: 100% 100%;
            position: absolute;
            right: -13px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
`;

export const Brand = styled.div`
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

export const ToggleMenuButton = styled.button`
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

export const ProfileThumb = styled.div`
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
    z-index: 99;
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

export const ProfileImage = styled.img`
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  background: white;
  box-shadow: 0px 0px 4px #00000040;
  border-radius: 2px;
  top: 100%;
  right: 0;
  min-width: 150px;
  padding: 10px 15px;

  &:before {
    top: -16px;
    right: 9px;
    left: auto;
    border: 8px solid transparent;
    border-bottom-color: rgba(27,31,35,0.15);
    position: absolute;
    display: inline-block;
    content: "";
  }

  &:after {
    top: -14px;
    right: 10px;
    left: auto;
    border: 7px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    display: inline-block;
    content: "";
  }

  >div {
    &:before {
      content: "";
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: 99;
      background: rgba(0, 0, 0, 0);
      top: 0;
      right: 0;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 999;

    > li {
      line-height: 1.7;
      > a {
        font-size: 1.1rem;
        padding: 0;
        font-weight: 500;
      }
    }
  }
`;
