import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
`;

export default ({children}) => (
  <Container>
    {children}
  </Container>
);
