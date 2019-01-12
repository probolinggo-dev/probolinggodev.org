// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  title: string,
  image: string,
  slug: string,
}

export default (props: Props) => {
  const {
    title,
    image,
    slug,
  } = props;

  return (
    <Container>
      <Link to={`/places/${slug}`}>
        <article>
          <figure>
            <img src={image} alt={title} />
          </figure>
          <aside>
            <h3>{title}</h3>
          </aside>
        </article>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      img {
        height: 110%;
      }
    }
  }
  article {
    position: relative;
    height: 380px;
    width: 100%;
    overflow: hidden;
    padding: 20px 40px;
    border-radius: 30px;
    box-shadow: 0px 0px 5px 0px #cecece;

    aside {
      position: absolute;
      bottom: 0;
      left: 0;
      background: white;
      width: 100%;
      color: #313131;
      padding: 10px 30px;
      h3 {
        margin: 10px 0;
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
    }
  }
`;
