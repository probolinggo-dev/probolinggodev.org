import React from 'react';
import Header from '../component/Header';
import ProjectCard from '../component/ProjectCard';
import Container from '../component/Container';
import Row from '../component/Row';

const projectItems = [
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/new_svgs/fasttext.svg',
    title: 'FastText',
    description: 'Library for text representation and classification',
    githubURL: 'https://github.com/facebookresearch/fastText',
    webURL: 'https://fasttext.cc/',
  },
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/new_svgs/Detectron_Icon.svg',
    title: 'Detectron',
    description:
      "FAIR's research platform for object detection research, implementing popular algorithms like Mask R-CNN and RetinaNet",
    githubURL: 'https://github.com/facebookresearch/Detectron',
    webURL: 'https://probolinggodev.org',
  },
  {
    logoURL: 'https://opensource.fb.com/templates/dist/images/pytorch.svg',
    title: 'PyTorch',
    description: 'Deep learning Framework',
    githubURL: 'https://github.com/pytorch/pytorch',
    webURL: 'https://pytorch.org/',
  },
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/new_svgs/Prophet_Icon.svg',
    title: 'Prophet',
    description:
      'Tool for producing high quality forecasts for time series data that has multiple seasonality with linier or non-linier growth',
    githubURL: 'https://github.com/facebook/prophet',
    webURL: 'https://facebook.github.io/prophet/',
  },
  {
    logoURL:
      'https://opensource.fb.com/templates/dist/images/Tensor_Comprehensions_Icon_100x100px.svg',
    title: 'Tensor Comprehensions',
    description:
      'A domain spesific language to express machine learning workloads',
    githubURL: 'https://github.com/facebookresearch/TensorComprehensions',
    webURL: 'https://facebookresearch.github.io/TensorComprehensions/',
  },
  {
    logoURL: 'https://opensource.fb.com/templates/dist/images/torchcraftai.png',
    title: 'TorchCraftAI',
    description:
      'A bot platform for machine learning research on StarCraft Brood War',
    githubURL: 'https://github.com/TorchCraft/TorchCraftAI',
    webURL: 'https://torchcraft.github.io/TorchCraftAI/',
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <h2>OpenSource Projects</h2>
        <Row>
          {projectItems.map((item, index) => (
            <div className="item" key={index}>
              <ProjectCard {...item} />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
