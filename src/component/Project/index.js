import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import styled from 'styled-components'

const items = [
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/new_svgs/fasttext.svg',
    title: 'FastText',
    description: 'Library for text representation and classification',
    githubURL: 'https://github.com/facebookresearch/fastText',
    webURL: 'https://fasttext.cc/'
  },
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/new_svgs/Detectron_Icon.svg',
    title: 'Detectron',
    description:
      "FAIR's research platform for object detection research, implementing popular algorithms like Mask R-CNN and RetinaNet",
    githubURL: 'https://github.com/facebookresearch/Detectron',
    webURL: 'https://probolinggodev.org'
  },
  {
    logoURL: 'https://opensource.fb.com/templates/dist/images/pytorch.svg',
    title: 'PyTorch',
    description: 'Deep learning Framework',
    githubURL: 'https://github.com/pytorch/pytorch',
    webURL: 'https://pytorch.org/'
  },
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/new_svgs/Prophet_Icon.svg',
    title: 'Prophet',
    description:
      'Tool for producing high quality forecasts for time series data that has multiple seasonality with linier or non-linier growth',
    githubURL: 'https://github.com/facebook/prophet',
    webURL: 'https://facebook.github.io/prophet/'
  },
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/Tensor_Comprehensions_Icon_100x100px.svg',
    title: 'Tensor Comprehensions',
    description:
      'A domain spesific language to express machine learning workloads',
    githubURL: 'https://github.com/facebookresearch/TensorComprehensions',
    webURL: 'https://facebookresearch.github.io/TensorComprehensions/'
  },
  {
    logoURL: 'https://opensource.fb.com/templates/dist/images/torchcraftai.png',
    title: 'TorchCraftAI',
    description:
      'A bot platform for machine learning research on StarCraft Brood War',
    githubURL: 'https://github.com/TorchCraft/TorchCraftAI',
    webURL: 'https://torchcraft.github.io/TorchCraftAI/'
  }
]

class Project extends Component {
  renderProjectCard() {
    return items.map((item, index) => (
      <ProjectCard
        key={index}
        logoURL={item.logoURL}
        title={item.title}
        description={item.description}
        githubURL={item.githubURL}
        webURL={item.webURL}
      />
    ))
  }

  render() {
    return (
      <Container>
        <h1>Open Source Project</h1>
        <ProjectContainer>{this.renderProjectCard()}</ProjectContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 25px 3vw;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Project
