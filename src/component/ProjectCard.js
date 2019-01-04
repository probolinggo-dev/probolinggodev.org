// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  logoURL: string,
  title: string,
  description: string,
  githubURL: string,
  webURL: string,
}

function ProjectCard(props: Props) {
  const {
    logoURL,
    title,
    description,
    githubURL,
    webURL,
  } = props;
  return (
    <Container>
      <Logo src={logoURL} alt="project logo" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LinkContainer>
        <Link href={githubURL}>Github</Link>
        <Link href={webURL}>Website</Link>
      </LinkContainer>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #1a1a1a;
`;
const Description = styled.p`
  color: #424242;
  font-size: 14px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Link = styled.a`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px;
  border: solid 1px #1a1a1a;
  border-radius: 5px;
`;

const Logo = styled.img`
  width: 50%;
`;

export default ProjectCard;
