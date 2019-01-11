// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  image: string,
  title: string,
  description: string,
  github: string,
}

function ProjectCard(props: Props) {
  const {
    image,
    title,
    description,
    github,
  } = props;
  return (
    <Container>
      <Logo src={image} alt="project logo" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LinkContainer>
        <Link href={github}>Github</Link>
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

const Title = styled.h3`
  font-size: 16px;
  color: #1a1a1a;
  margin: 3px 0;
  word-break: break-all;
`;
const Description = styled.p`
  color: #424242;
  font-size: 14px;
  margin: 0;
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
  width: 100%;
`;

export default ProjectCard;
