import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Header from '../component/Header';
import Container from '../component/Container';

const photos = [
  {
    src: 'https://lh3.googleusercontent.com/OaVDywbfUrl2axd76-fqkZAhCAXiaK6XXLUFOZsr1vlDMb3RNVkD-XaKY3ufsBxDIxh6Zz6D-NrhF7hklMagV4tv0iYdsJzUinDi87LQU9CsWjYFFDARciCyUUpN_wUQIYJc3gmFuwqRWeKDRCfvsQHK1Pbv5tCNxNW7aEth7s40calEhNccUe5Yh_dOpCvzj5goWmyLeRFN2M0Vy6RDvYd1QLEJ0v2YBPnPsL5VaeoO_gYPpuFho-_fJ2J3Z1C-qQlqwOHU77znLqOxkBoJRpPohjXRTq0kmW0vMQaaMSk3nYindEwCl_lh9g6BChn5qxBgxCKqKzoJPJ6jQWMJORvf7B51CdufwLzStEOqwZlS1gzO6HRMwRtJp5gevTWFLwo1-DpIuUzuewn7j0vR31c7KV2IzNSAjmAEPGlc_t-K_oAYfaeFnHO6lKJ_bTuo9xuCZyLN2UyNFNs8azwszYheuwzmv9bG5vYK54qAfOZLDleNzYtQ7tZE6SY9cWtHayh9wMfuC6fn_SzVuMloBLoPLoxbDKmsHqf48hdH_91cgH2R6MvjV2ESG-LmuukLgxo5kG2EZFanLoXt3RIdUz-KxK9hlOT14jm3eBCP5cMxXREaf6kzNNJ3sFNdt_Jg6IF9W2wzhCNCsPJBF7smEAwa=w1356-h1808-no',
    width: 195,
    height: 261,
  },
  {
    src: 'https://lh3.googleusercontent.com/viNpTcqDaLUAA7ynFxHr1-2nS5A_uaiH_mP3XmnHRRr1uceUIsMd2F_HtTlCsBDLpQOVE7heXFtRB3cKoGOxcYxjusObIjr_rHcsH6XMTyMFu0UAkOnjxAi8IMK5chake1LS9llwfIvteTCyS8zpknXbs90VJjuZVAr3VEj5hJYKZcUWpjTDrX7VPLRKtKDlSvuiDE2wX2azTOo1UM_KiUmGByCd-foHIRTBy2XQmtrdIyu3PacTRX1LVm1YOD19L2-ZogejdArZqEi27Srtk6CmLUyYMDY2skeZafzVr6RRV0rgBhl2ooChjWL4xATokNwhA3hoQmHR1m0Wvtrxwlox5_OazKNlXrUHo0gNBZoGAaBobCUbrML_ZkGsj3NC1bf7gy-q_FcuImNDzdGj4FMvDWKDKXbKV3D6w5FfZbcVZJO-mW9SKgtND_kfI3soU2uPse_dBQg4xr49VEdukIEFpfNdd-rH35Zh_BWrDeUYQ4n42H4QIRqki4mm3okr3USxkiVHLRDb1QY1lpMEy0n7heqng2PzA50oMXtYHUEhKxRIQmPrXalZfqxWSMeVW9pbUswgAiaMJpmNht2T43zB5kNFz8dmR8QER6jzKjWbB0vkWMozWsM09qVdd12EDae1XS0t_H3T1_oaaTIcITwc=w1356-h1808-no',
    width: 195,
    height: 261,
  },
  {
    src: 'https://lh3.googleusercontent.com/Ug3i_ksR6g2qrlWfzkbaOm0s4K5UrD_BLCMVMFn-pvIm_oLEK9EsnBu6y3gRctSWk-WLydlO5VrPKtOfOzK8FiLLN1YmaNlzCDoZzEq--R-ka2deghb1DvrBryMXWD-cdW41F6l70mR-duODqkcGoShJSLcUPcg08favliGvmiXEwriB7uF0CcJxwRVc39jmcWVmnWRoC8JRi5mDIkjlSYt7-mIXtWmemhGfH9CZOKNT7cC-9_dGgiL0TN1orH08dDsF0Wbg2bN4Wl0K0Uh74DvbO8RfoZ3q_2AkQzmYkdCuiLTyxZYmtUbf1bEe1YeDHyRGz2Fr71IeRByOngzVp9HovdjqLEwdb2eY1OaR9P1_-QLwWfjhs-UlHyy5BjAnLs4uME7Psfr2Dyp6Fqfj9C5nPw3Hor1NLpsfVUfhwQH0e3ka7ZIpCXYlCJ6dLuMPov1Sh1136nMA3ua4dLYSonpa9cO7sCEwfLQdWlAZswYYzFf6Pu3HRhFg1AFge6FjBumVihUxaCfgjpLHNvT72wSG4zvP_OKhHPYmb7vYYfbGc9Pp3aNQOH0wwEeVX7lHGDpRkbSpLrvPweT0cUC28pYrEX1bUP11NPh98vxjxjmYwypp7EK697E2RUoI6YhUCxDBR6YdaldaUtzYeZ0uYEaF=w2412-h1808-no',
    width: 348,
    height: 261,
  },
  {
    src: 'https://lh3.googleusercontent.com/fXKxcm0gh9m85QGyczrI7OVScu6xEVwCAv1R6ozD9HPQgIObHgKmcqBIipqXThIX3xKhGubI0dJw7qhIL1N3P456xIEbHcyxSNA3n6XeiVVgz73Xid-XvSe-nwJeFk-UNmaZNWzp8YQkJol-LKJFRGpB_qmOcZmEoui2fdINbMRaUSF7v6W-nKrD-ZJGL0Z9pzBC04A20GOhVJei49eIqFJPJ9SMNsSWSQiZc_pCO6PhJF7hWIBE3zSneSodRepHiHiotJuKxaLONBvjjZMc5tt_0Wdw9lPz3ijKqVRF0IAskwVEOvetqvxYFm5F1UX3oLJWkKHxeGVhJm8B5Y6-fHdsrzuKAmuT5tpUysR8Mf1he3qclNItRxvR1Lydxj8Fk81Jd0onRoAwpfSvv-2xut4XCcS-M4WKmYQa5t6E2DrEPG3A_uUO1tXuarMmJrz1hzQi1ja-wTmSxU5Gcev6RZnahEHbD4G656_GmpOcedNzOfWgRSKIT_O7mj55BE5IOYSehPv0FQw5SwiPqSZRgRVnM7uaGpLnnOw1f1781AlHsxHKMNjgKtxqGZcGNlrCXLoFMTzd5N53vvI1EjB8xUCp8SZb5L_JCjRhVSvbvaBbMrmyE8t6C2H3mx8HVqQnpMoGe_lJ17H_e4EJVy9dXv-2=w2412-h1808-no',
    width: 348,
    height: 261,
  },
  {
    src: 'https://lh3.googleusercontent.com/kwP9QATjfqVBnZltcHJ4M_vnaHe_u8PDWGBqL7pIKS-09U1Z2aTEpS7v6PXw2kuF_fMy1UYKEBmm2nZAcXxo14UyMvCw5vGSWumTbN37Em-c96ssS7m_TkcUtPd2ffQxzL2iKof-DNTtZ5uOald8eofGRJvEyZKpxyxzfMv1VuAdHkYXKiVsOBj2DCGpFEAozOeOl0ZJB-d9tXw5d8GGHMKV1GKfmy7QqVv9SUyWXUrzuSXPcDHTRfU6IwUKFvtZJpA7m3f-KEJrt1DMmM_ShN7-MeALkxDPhXhd_spOr87EXuDmgzw0XLYV5HKtGcKKrmZoRUUugkEVxw86j3pPEGZxexnA54jHpfkgVrh8LADcmXDTLYo23QAVO-pylpBQauS4dqVIhNb9MLIWVVjnofEAlOKU7RPe7zguf58a5OHXBoYWyQQK3DZjyrqgvOmTGIOL885qJhlkT39b96UwmFhoffTQzrglo2onP6y8RBmCxBzRKH8zmJMEyzSIfv9i4Y_DnMSs2hZwRE_Zf6WCCXSh9hh6KAd7BsL3-wmTrq3swaknH2Jtm484Uc-fOR_QnH-2Kmw1sMi0_v6tX4K1a_CJdWMLG9-JB_ecMw2Ooi2aBDN0L2q27raqH0d7hmZGakRxRWzBiiJq9jXW3PTbUCMI=w2412-h1808-no',
    width: 348,
    height: 261,
  },
  {
    src: 'https://lh3.googleusercontent.com/dFDuuZQhAOC58_w7aCmdB41s1QmPOKUG3c2tU5Bphjm14dmnFlahvgFG_l7cDpeOvur9fefT--RT0W5wVaJBGi3xKvUg3NGx4Kz-cQvm7v6oKF-fVIeKfMyXEUlO8F1crdmD6634vNc9h3mqeRm8yCWMCubgwoqySj2gDrGmeLhOm9Ps5yPxwJngmIVd-NC1RDCp1fVRPDBaZcMvApRBMIzsePFYjSxwVB8lk-xuLamjEUm654_RycF5TNy3qJnRC5JkEJXGWz9lFtv5XOilPeqsqbjSDKgsEwDaa_toVuS5Q-rQyAAx-quzoFyy19nCU-1gZ2BVHQToqeEhx_OnvAa2QGicru-R8ZH0fO02W72jGeqQRw4iO0VrODbHeQgI1u81Mos9DZzA8nLcO349FmwPBm80KdnZyxLBUhMxSe9VZDT7DfCXQ5fAGJDzKuvUzkH_Xb1RM5YNVHHOegciwkP7JumR4O23S42L12Z_7IUAOLUdmJxAFKs_0q8bcnd0PQ9yBxLMXFITOU1XxoQtNkqXP0qCxQA-aYn3nBhhVR3XrJhh7QMG__EHlGcswyVBzqcnZx_mAS_XGUbV1z83jzvS0XbSXYCANq8j12QlP-mOlgSRvWKemT-2x72a95o1QmMJIsqSeA3cIysXK3ROmlZx=w2412-h1808-no',
    width: 348,
    height: 261,
  },
  {
    src: 'https://lh3.googleusercontent.com/MIScjI4A1ZroLNKubok2VGkvoGY0flIRKisAEqlIXkD5RBfxdNk_2STvVTTu7nqD-JSGoliHuMLEFWA0YLzGSnpwrp94JGxoASS3OEmup7NtM3zMcSQ_R71gS3tJM7Kx7Ieqne_CDK9AVkNm2D5oHOR0tz5KOnggcLbKHPSJ0qNr6Kd0mwaEpD1Yzo6pPw2EpUbjaHHvGfiGaVngTFqFey3ukURSFmFYKcUZZnbURn_keTBoF5hwJoDNPQCJyXOMpn3w6yFqv_O0UCbO6A0hrh4RmD-s5iFEHaZQEjuhK42bgzz29OvpfDgfabP9X0XQhQQYZrN4PH8xhAlOCt4DcBIVCS1fqV5C1uMUI-O4Dt-jIHnh4uP_wpC9RU3-sOPybfzCBgLQwRwLId0y20h6KwQJP61n2OQ6z7MLUq9mTN-jgmSTRK8pbpS2I_yiXST4Rn3dNaHdyps_Be0R-OvskIutE0qa4Y_pOrrXgbj8oZrvm4SUgdcT2O4XfYb2e3BeTwPGn2uQxAgRDxDABxZIxyu8aFFr6Ey8ACNAKHjNHtDVONDSEXt0qoNCEluYBVUP1Dhw4GvVqyUmnOdTB8doFb9h9p-N_uoNeByyoHLbZhaA-g6reaExQ226btjVz29LOhBuCKq-yZyfguom0_hFGo5d=w2412-h1808-no',
    width: 348,
    height: 261,
  },
];

export default function About() {
  const [currentImage, setCurrentImage] = useState({ open: false, index: 0 });

  function openLightBox(event, obj) {
    setCurrentImage({
      open: true,
      index: obj.index,
    });
  }

  function closeLightBox() {
    setCurrentImage({
      open: false,
      index: 0,
    });
  }

  function nextImage() {
    setCurrentImage({
      ...currentImage,
      index: currentImage.index + 1,
    });
  }

  function prevImage() {
    setCurrentImage({
      ...currentImage,
      index: currentImage.index - 1,
    });
  }

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

          <h1>Gallery</h1>
          <p>Meetup pertama Probolinggo Dev yang hanya dihadiri lima peserta dan Meetup kedua Probolinggo Dev yang dihadiri lebih banyak peserta.</p>
          <Gallery photos={photos} onClick={openLightBox} />
          <Lightbox
            images={photos}
            onClose={closeLightBox}
            onClickNext={nextImage}
            onClickPrev={prevImage}
            currentImage={currentImage.index}
            isOpen={currentImage.open}
          />
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
