// @flow
import React from 'react';
import withAuth from '../utils/withAuth';
import Layout from '../components/Layout';
import Container from '../components/Container';
import CoverHeader from '../components/CoverHeader';
import Article from '../components/Article';

class About extends React.Component<{}> {
  render() {
    return (
      <Layout>
        <CoverHeader
          title="ProbolinggoDev"
          subtitle="We are legion of young people from probolinggo that dreaming of something big, acting for something big!"
          backgroundUrl="/static/assets/images/about-header-probolinggodev.jpg"
        />
        <Container>
          <Article>
            <p>Merupakan komunitas yang fokus pada bidang pengembangan perangkat lunak di Probolinggo. Komunitas kami mempunyai rasa optimis yang kuat bahwa masyarakat Probolinggo dari berbagai kalangan yang berminat untuk mengembangkan perangkat lunak komputer dapat belajar bersama, mengembangkan kemampuan di bidang teknis pemrograman, kemampuan bersosialisasi mengenalkan dan mempresentasikan program yang telah ia buat, hingga kesiapan menghadapi tes wawancara pekerjaan maupun menerima pekerjaan sebagai pekerja lepas, sehingga siap berkarir menjadi Programmer yang Handal.</p>
          </Article>
        </Container>
      </Layout>
    );
  }
}

export default About;
