import React, { Component } from 'react';

import { BlogImage, BlogVideo } from '../components/BlogMedia';

import img1 from './img/arrival/1.jpg';
import img2 from './img/arrival/2.jpg';
import img3 from './img/arrival/3.jpg';
import img4 from './img/arrival/4.jpg';

const styles = {
  root: {
    marginTop: '6vh'
  },
  title: {
    marginLeft: 0
  }
};

class Arrival extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="row justify-content-center" style={styles.root}>
        <div className="col-sm-6">
          <h1 style={styles.title}>Arrival</h1>
          <BlogVideo vidSource="https://www.youtube.com/embed/oW-TotjvcxI" />
          <p>
            &emsp;This Tuesday I arrived in Barcelona. I left 2 days early on
            Sunday the 10th due to a long connection in Amsterdam, but
            fortunately long enough to allow time to explore the city.
            Amsterdam, I thought from my short time there, seemed very
            concentrated with the vices offered, at least mainly in the city
            center. I found it strange yet thrilling walking some of the most
            uncensored streets in the world.
          </p>
          <BlogImage picSource={img4}>Arc de Triomf</BlogImage>
          <p>
            &emsp;The most incredible part was that they were all only a little
            ways away from an elementary school that had just been dismissed for
            the day. These young children mounted their bikes and peddled home.
            Some rode through the red light district, as just part of their
            daily commute. This mix of typical daily life and vice operating
            side by side without any noticeable tension was intriguing.
          </p>
          <BlogImage picSource={img3} />
          <p>
            &emsp;Biking in Amsterdam is very popular, children and elderly
            folks alike peddling away throughout the city. I believe this is a
            mode of transportation that should be encouraged much more
            throughout the U.S.
          </p>
          <BlogImage picSource={img2}>
            Ben, Ana, and I standing in the kitchen
          </BlogImage>
          <p>
            &emsp;A couple flights later I arrived at my final destination;
            Barcelona. The natural beauty of the Mediterranean city was
            accentuated by the clear skies and warm morning sun. The views only
            improved as we drove through the more populated urban area, narrow
            streets, colorful buildings, and finally pulled up to the homestay.
            I soon met my housemate Ben, a friendly Senior at Bemidji State,
            Minnesota. Ben is from a small town in Minnesota with a population
            of 350. I have always lived in cities, so learning more about rural
            living in the Midwest was interesting. Ben explained how to
            spearfish and hunt and some of the tough winters they've faced. We
            also met our host mom Ana, she is very nice and laid-back, she works
            as a philosophy teacher at a high school outside the city, but has
            lived in Barcelona for the past 30 years. Ana is a great cook and
            only speaks Spanish, which we barely understand. Communication is a
            little difficult at times, but we have managed well so far.
          </p>
          <BlogImage picSource={img1}>Mt. Tibidabo</BlogImage>
          <p>
            &emsp;Our neighborhood is relaxed and populated mostly by older
            folks. We are on the outskirts of the city, so we're close to Mt.
            Tibidabo, which today I discovered is a great area to jog, the view
            is incredible and many other locals use the track that spans a good
            few miles around the city to exercise. So far I have walked through
            much of Barcelona and each street is more beautiful than the last,
            each area and neighborhood holds its own secrets, and is different
            than the rest. I'm excited to get to know the area better and
            improve my language skills to communicate with the locals and feel a
            little less like a tourist.
          </p>
        </div>
      </div>
    );
  }
}

export default Arrival;
