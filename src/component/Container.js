// @flow
import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  @media (min-width: 1300px) {
    width: 1200px;
  }

  @media (max-width: 1299px) and (min-width: 1000px) {
    width: calc(100% - 100px);
  }

  @media (max-width: 999px) {
    width: calc(100% - 40px);
  }
`;
