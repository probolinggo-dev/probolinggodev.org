import styled from 'styled-components';

export default styled.div`
  text-align: left;
  padding: 80px 0;
  color: white;

  @media (max-width: 720px) {
    padding: 40px 20px;
  }

  h1 {
    font-family: "Alegreya Sans", "SF Optimized", system-ui, -apple-system, system-ui, ".SFNSText-Regular";
    font-size: 2.4rem;
    margin: 0;
    line-height: 1;
  }
  p {
    font-size: 1.5rem;
  }
`;
