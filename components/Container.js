import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0 20px' : '20px'};
`;

export default ({children, ...rest}) => (
  <Container {...rest}>
    {children}
  </Container>
);
