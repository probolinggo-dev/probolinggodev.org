import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Header from '../component/Header';
import ProjectCard from '../component/ProjectCard';
import Container from '../component/Container';
import Row from '../component/Row';

const GET_PROJECTS = gql`
  query getProjects ($page: Int!) {
    projects(page: $page) {
      items {
        title
        image
        github
        description
      }
    }
  }
`;

export default function Home() {
  const { data } = useQuery(
    GET_PROJECTS,
    { suspend: false, variables: { page: 1 } },
  );
  const items = (data && data.projects && data.projects.items) || [];
  return (
    <div>
      <Header title="Engineering Collaboration" description="Berkumpulnya anak - anak IT Probolinggo dengan membuat inovasi, berbagi pengalaman & Pengetahuan untuk membangun Kota & Kabupaten yang lebih baik." />
      <Container>
        <h2>OpenSource Projects</h2>
        <Row>
          {items.map((item, index) => (
            <div className="item" key={index}>
              <ProjectCard {...item} />
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
