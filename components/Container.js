import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0 10px' : '10px'};
`;

export default ({children, ...rest}) => (
  <Container {...rest}>
    {children}
  </Container>
);
