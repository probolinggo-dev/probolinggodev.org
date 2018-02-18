import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 10px 20px;
  align-items: center;
  font-size: 1.1rem;
  img {
    width: 100px;
    border-radius: 50%;
  }
  a {
    display: inline-block;
    margin: 10px 0;
    color: #da9600;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #fcad00;
      text-decoration: overline;
    }
  }
`
