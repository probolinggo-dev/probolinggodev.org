import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import Container from '../component/Container';

export default function About() {
  return (
    <div>
      <Header
        title="About Us"
        description="Kami percaya bahwa organization seperti  Mozilla, Wikipedia,  dan  Khan Academy  yang produknya kita gunakan setiap hari juga bermulai dari sebuah komunitas yang kecil, dari perkumpulan orang - orang yang memiliki ambisi."
        background="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
      />

      <Container>
        <Article>
          <h1>Visi & Misi</h1>
          <p>Probolinggo Dev menjadi sebuah sekolah bagi orang - orang yang passionate terhadap teknologi, menjadi titik awal berkumpulnya para tech founder dan tech maker masa depan, menjadi komunitas yang memperjuangkan opensource dari Kota dan Kabupaten Probolinggo, menjadi harapan bagi orang - orang bahwa pendidikan tidak berakhir di sekolah - sekolah formal.</p>

          <p>Misi kami adalah memastikan bahwa berkumpulnya anak - anak IT Probolinggo akan membuat kebermanfaatan melalui produk teknologi, memastikan bahwa pendidikan dapat berjalan lebih efisien dengan teknologi, memastikan bahwa semua orang entah dari desa atau kota memiliki kesempatan yang sama terhadap akses teknologi.</p>

          <blockquote>
            Kami percaya bahwa organization seperti
            &nbsp;
            <strong>Mozilla,</strong>
            &nbsp;
            <strong>Wikipedia,</strong>
            &nbsp;
            dan
            &nbsp;
            <strong>Khan Academy</strong>
            &nbsp;
            yang produknya kita gunakan setiap hari juga bermulai dari sebuah komunitas yang kecil, dari perkumpulan orang - orang yang memiliki ambisi.
          </blockquote>
        </Article>
      </Container>
    </div>
  );
}

const Article = styled.article`
  padding-top: 20px;
  max-width: 900px;
  
  p {
    font-size: 1.2rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 52px;
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
