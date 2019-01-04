// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  size: number,
  spacer: number,
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse',
};

export default function Row(props: Props) {
  const {
    size = 4,
    spacer = 25,
    direction = 'row',
    ...rest
  } = props;
  return (
    <StyledRow size={size} spacer={spacer} direction={direction} {...rest} />
  );
}

const StyledRow = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;

  > .item {
    margin-left: ${props => props.spacer}px;
    margin-bottom: ${props => props.spacer * 2}px;
    display: flex;
    flex: ${props => `calc(${100 / props.size}% - ${props.spacer}px) 0 0`};

    @media (max-width: 1299px) and (min-width: 1000px) {
      flex: ${props => `calc(${100 / (props.size - 1)}% - ${props.spacer}px) 0 0`};
    }
  
    @media (max-width: 999px) and (min-width: 769px) {
      flex: ${props => `calc(50% - ${props.spacer}px) 0 0`};
    }

    @media (max-width: 768px) {
      flex: ${props => `calc(100% - ${props.spacer}px) 0 0`};
      margin-left: 0;
    }
  }
`;
