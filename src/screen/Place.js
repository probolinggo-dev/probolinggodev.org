// @flow
import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Markdown from 'markdown-to-jsx';
import Header from '../component/Header';
import Container from '../component/Container';

const GET_PLACE = gql`
  query getProjects ($slug: String!) {
    place(slug: $slug) {
      title
      description
      image
      content
    }
  }
`;

export default function Place(props: any) {
  const { match } = props;
  const { params } = match;
  const { data } = useQuery(
    GET_PLACE,
    { suspend: false, variables: params },
  );
  const place = (data && data.place) || {};

  return (
    <div>
      <Header
        title={place.title}
        description={place.description}
        background={place.image}
      />

      <Container>
        <Article>
          <Markdown>
            {place.content || ''}
          </Markdown>
        </Article>
      </Container>
    </div>
  );
}

const Article = styled.article`
  padding-top: 20px;
  max-width: 900px;
  
  p {
    font-size: 1.1rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 25px;
  }

  blockquote {
    font-family: 'Roboto Slab',serif;
    font-size: 1.7rem;
    line-height: 1.5;
    margin: 0;
    padding: 20px 0;
    position: relative;
    margin: 35px 0;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      width: 110px;
      height: 5px;
    }
  }
`;
