import React, { Component } from 'react'
import styled from 'styled-components'

class ProjectCard extends Component {
  render() {
    return (
      <Container>
        <Logo src={this.props.logoURL} alt='project logo' />
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
        <LinkContainer>
          <Link href={this.props.githubURL}>Github</Link>
          <Link href={this.props.webURL}>Website</Link>
        </LinkContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  box-sizing: border-box;
  border: solid 1px #cecece;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 15px;
  width: calc(25% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 18px;
  color: #1a1a1a;
`
const Description = styled.p`
  color: #424242;
  font-size: 14px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
const Link = styled.a`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px;
  border: solid 1px #1a1a1a;
  border-radius: 5px;
`

const Logo = styled.img`
  width: 50%;
`

export default ProjectCard
