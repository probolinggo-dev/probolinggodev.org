import styled from 'styled-components';
import Head from 'next/head';

const backgrounds = [
  'https://images.unsplash.com/photo-1510502529292-40f6dfae679b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa942e9dea46771256dd72989e6ba478&auto=format&fit=crop&w=2252&q=80',
  'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=670298bf5d0b94c29ec68504d7ba36b8&auto=format&fit=crop&w=1310&q=80',
  'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3072165d9511cc36da110d3416d6c44d&auto=format&fit=crop&w=2250&q=80',
  'https://images.unsplash.com/photo-1496674205429-924b32acd421?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c79e9fb8930b09f0c2885309718bf351&auto=format&fit=crop&w=2250&q=80',
  'https://images.unsplash.com/photo-1509459924413-27565170a056?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=267f5458e73a7ee9a6eab20b1fae8911&auto=format&fit=crop&w=2250&q=80',
  'https://images.unsplash.com/photo-1507919909716-c8262e491cde?ixlib=rb-0.3.5&s=1b5846d855ca585390c112af3a9476f8&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1487073240288-854ac7f1bb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=438b96faf14ac641c3954b1abad128ee&auto=format&fit=crop&w=2251&q=80',
];

const randomImage = () => {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
};

const Construction = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-color: grey;
  background-repeat: no-repat;
  background-position: center center;
  box-sizing: border-box;
  overflow: hidden;
  .centerbox {
    display: inline-block;
    background: #ffffff;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    padding: 10px 30px;
    min-width: 320px;
  }
`;

export default () => {
  const bg = randomImage();
  return (
    <Construction bg={bg}>
      <div>
        <Head>
          <title>ProbolinggoDev</title>
        </Head>
        <div className="centerbox">
          <p>
            This site is under construction, Join us at <a href="https://telegram.me/ProbolinggoDev" target="_blank">Telegram</a>
            <br/> <br/>
            ~ <strong>ProbolinggoDev Team</strong>
          </p>
        </div>
      </div>
    </Construction>
  )
};
