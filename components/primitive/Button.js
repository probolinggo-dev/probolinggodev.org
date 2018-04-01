// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  href?: string,
  children: string,
}

const Anchor = styled.a`
  background: white;
  padding: 15px 30px;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 2px;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  color: #454849;
  &:hover {
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);;
    color: #000000;
  }
`;

const Button = styled.button``;

export default function(props: Props) {
  const {href, children, ...rest} = props;
  if (href)
    return (
      <Anchor rel="noopener" {...rest} href={href}>
        {children}
      </Anchor>
    );

  return (
    <Button {...rest}>
      {children}
    </Button>
  );
}
