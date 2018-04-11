import React from 'react';
import withAuth from '../utils/withAuth';
import Layout from '../components/Layout';
import Container from '../components/Container';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1>Probolinggo Dev</h1>
          <p>Merupakan komunitas yang fokus pada bidang pengembangan perangkat lunak di Probolinggo. Komunitas kami mempunyai rasa optimis yang kuat bahwa masyarakat Probolinggo dari berbagai kalangan yang berminat untuk mengembangkan perangkat lunak komputer dapat belajar bersama, mengembangkan kemampuan di bidang teknis pemrograman, kemampuan bersosialisasi mengenalkan dan mempresentasikan program yang telah ia buat, hingga kesiapan menghadapi tes wawancara pekerjaan maupun menerima pekerjaan sebagai pekerja lepas, sehingga siap berkarir menjadi Programmer yang Handal.</p>
          <h3>Sejarah</h3>
          <h3>Visi</h3>
          <h3>Misi</h3>
        </Container>
      </Layout>
    );
  }
}

export default About;
