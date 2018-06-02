import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0 20px' : '20px'};
  /* Custom, iPhone Retina */
  @media only screen and (min-width : 320px) {
    width: 315px;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width : 480px) {
    width: 475px;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width : 768px) {
    width: 748px;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    width: 920px;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    width: 1000px;
  }
`;

export default ({children, ...rest}) => (
  <Container {...rest}>
    {children}
  </Container>
);
