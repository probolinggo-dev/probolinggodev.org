// @flow
import React from 'react';
import styled from 'styled-components';
const R = require('ramda');

const InputStyled = styled.input`
  display: block;
  width: 100%;
  height: 32px;
  line-height: 1.42857;
  color: #555555;
  padding: 25px 15px;
  border: 2px solid #e6e6e6;
  margin-bottom: 15px;
  box-sizing: border-box;
  border-radius: 5px;
  &:focus {
    border-color: #2f2f2f;
    outline: 0;
  }
`;

type Props = {
  type?: string,
};

export default class Input extends React.PureComponent<Props> {
  render() {
    const {type, ...rest} = this.props;
    return <InputStyled type={R.or(type, 'text')} {...rest}/>;
  }
}
