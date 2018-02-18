import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  flex: 50% 0 0;
  padding: 7.5px;

  @media (max-width: 920px) {
    flex: 90% 0 0;
  }

  >.outline {
    padding: 7.5px;
    text-align: center;
  }
  a {
    color: #da9600;
    text-decoration: none;
    &:hover {
      color: #fcad00;
      text-decoration: overline;
    }
  }
  p {
    margin-top: 0;
    font-size: 1.8rem;
  }
`;
