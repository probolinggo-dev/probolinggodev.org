// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  title: string,
  image: string,
  slug: string,
  description: string,
}

export default (props: Props) => {
  const {
    title,
    image,
    description,
    slug,
  } = props;

  return (
    <Container>
      <article>
        <Link to={`/places/${slug}`}>
          <figure>
            <img src={image} alt={title} />
          </figure>
          <aside>
            <h3>{title}</h3>
            <p>{description}</p>
          </aside>
        </Link>
      </article>
    </Container>
  );
};

const Container = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      img {
        height: 110%;
      }
    }
  }
  > article {
    position: relative;
    height: 380px;
    width: 100%;
    overflow: hidden;
    padding: 20px 40px;
    color: white;

    aside {
      position: relative;
      z-index: 2;
      color: white;
      h3 {
        margin: 10px 0;
      }

      p {
        line-height: 1.3;
        margin: 0;
      }
    }

    figure {
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      height: 100%;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        transform: translate(-50%, -50%);
        transition: all 0.2s linear;
      }

      &::before {
        content: "";
        background: rgba(0, 0, 0, 0.31);
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    }
  }
`;
