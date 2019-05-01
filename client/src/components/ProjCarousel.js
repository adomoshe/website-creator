// Project carousel section on main page

import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import nimg1 from '../assets/img/nosh/1.jpg';
import nimg2 from '../assets/img/nosh/2.jpg';
import nimg3 from '../assets/img/nosh/3.jpg';
import nimg4 from '../assets/img/nosh/4.jpg';
import nimg5 from '../assets/img/nosh/5.jpg';

import uimg1 from '../assets/img/untrending/1.jpg';
import uimg2 from '../assets/img/untrending/2.jpg';
import uimg3 from '../assets/img/untrending/3.jpg';
import uimg4 from '../assets/img/untrending/4.jpg';
import uimg5 from '../assets/img/untrending/5.jpg';

const noshPicsArr = [nimg1, nimg2, nimg3, nimg4, nimg5];

const untrendingPicsArr = [uimg1, uimg2, uimg3, uimg4, uimg5];

const styles = {
  carouselDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    height: 'auto',
    width: '100%'
  },
  imgDiv: {
    marginTop: 0,
    marginLeft: 0,
    height: 'auto',
    width: '100%'
  },
  img: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
    height: '100%'
  }
};

class ProjCarousel extends Component {
  constructor(props) {
    super();

    switch (props.show) {
      case 'nosh': {
        this.picsArr = noshPicsArr
        break;
      }
      case 'untrending': {
        this.picsArr = untrendingPicsArr
        break;
      }
      default: {
        return undefined;
      }
    }
  }

  picsArr = []

  render() {
    return (
      <div style={styles.carouselDiv}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          width="100%"
          autoPlay={true}
          stopOnHover={false}
          interval={7000}
          transitionTime={800}
          swipeable={false}
        >
          {this.picsArr.map((pic, index) => {
            return (
              <div key={index} style={styles.imgDiv}>
                <img src={pic} alt="nosh" key={index} style={styles.img} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default ProjCarousel;
