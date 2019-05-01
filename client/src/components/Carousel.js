import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../assets/img/carousel/1.jpg';
import img2 from '../assets/img/carousel/2.jpg';
import img3 from '../assets/img/carousel/3.jpg';
import img4 from '../assets/img/carousel/4.jpg';
import img5 from '../assets/img/carousel/5.jpg';
import img6 from '../assets/img/carousel/6.jpg';
import img7 from '../assets/img/carousel/7.jpg';
import img8 from '../assets/img/carousel/8.jpg';
import img9 from '../assets/img/carousel/9.jpg';
import img10 from '../assets/img/carousel/10.jpg';
import img11 from '../assets/img/carousel/11.jpg';
import img12 from '../assets/img/carousel/12.jpg';
import img13 from '../assets/img/carousel/13.jpg';
import img14 from '../assets/img/carousel/14.jpg';

const picsArr = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14
];

//               <FontAwesomeIcon
//                 icon="hand-pointer"
//                 size="3x"
//                 color="white"
//                 transform={{ rotate: 90 }}
//               />
//               <FontAwesomeIcon
//                 icon="hand-pointer"
//                 size="3x"
//                 color="white"
//                 flip="horizontal"
//                 transform={{ rotate: 90 }}
//

const styles = {
  carouselDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    marginTop: '1vh',
    width: '100%',
    height: '43vw'
  },
  carousel: {
    width: '100%',
    height: '43vw'
  },
  imgDiv: {
    width: '100%',
    height: '43vw'
  },
  img: {
    width: '100%',
    height: '100%'
  }
};

const MainCarousel = () => (
  <div style={styles.carouselDiv}>
    <Carousel
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      width="100%"
      autoPlay={true}
      stopOnHover={false}
      interval={8000}
      transitionTime={1000}
      swipeable={false}
      style={styles.carousel}
    >
      {picsArr.map((pic, index) => {
        return (
          <div key={index} style={styles.imgDiv}>
            <img src={pic} alt="scenery" key={index} style={styles.img} />
          </div>
        );
      })}
    </Carousel>
  </div>
);

export default MainCarousel;
