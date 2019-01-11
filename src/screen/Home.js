import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Header from '../component/Header';
import ProjectCard from '../component/ProjectCard';
import PlaceCard from '../component/PlaceCard';
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

const GET_PLACES = gql`
  query getPlaces ($page: Int!) {
    places(page: $page) {
      items {
        slug
        title
        image
        description
        content
      }
    }
  }
`;

export default function Home() {
  const { data: projectsData } = useQuery(
    GET_PROJECTS,
    { suspend: false, variables: { page: 1 } },
  );
  const { data: placesData } = useQuery(
    GET_PLACES,
    { suspend: false, variables: { page: 1 } },
  );
  const placeItems = (placesData && placesData.places && placesData.places.items) || [];
  const projectItems = (projectsData && projectsData.projects && projectsData.projects.items) || [];
  return (
    <div>
      <Header title="Engineering Collaboration" description="Berkumpulnya anak - anak IT Probolinggo dengan membuat inovasi, berbagi pengalaman & Pengetahuan untuk membangun Kota & Kabupaten yang lebih baik." />
      <Container>
        <h2>Places</h2>
        <Row size={3} spacer={10}>
          {placeItems.map((item, index) => (
            <div className="item" key={index}>
              <PlaceCard {...item} />
            </div>
          ))}
        </Row>

        <h2>OpenSource Projects</h2>
        <Row size={10}>
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
