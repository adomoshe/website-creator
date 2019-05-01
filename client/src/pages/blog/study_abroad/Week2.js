import React, { Component } from 'react';

import { BlogImage, BlogVideo } from '../components/BlogMedia';

import img1 from './img/week_2/1.jpg';
import img2 from './img/week_2/2.jpg';
import img3 from './img/week_2/3.jpg';
import img4 from './img/week_2/4.jpg';
import img5 from './img/week_2/5.jpg';
import img6 from './img/week_2/6.jpg';
import img7 from './img/week_2/7.jpg';
import img8 from './img/week_2/8.jpg';
import img9 from './img/week_2/9.jpg';

const styles = {
  root: {
    marginTop: '6vh'
  },
  title: {
    marginLeft: 0
  }
};

class Week2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="row justify-content-center" style={styles.root}>
        <div className="col-sm-6">
          <h1 style={styles.title}>Week 2</h1>
          <BlogVideo vidSource="https://www.youtube.com/embed/cXi0i7VNNUo" />
          <p>
            &emsp;It's my second week in Spain. On Saturday, some friends and I
            decided to venture an hour out of Barcelona into Montserrat. This
            peak is part of the Catalan pre-coastal mountain range and is home
            to the Santa Maria de Montserrat Abbey, a monastery founded in 1025.
            Originally, I expected the gondola station at the top of the
            mountain to offer solely hiking trails stemming from an information
            station. We rode the gondola up around 1000 meters and found a wide
            stone street providing access to modern shops, restaurants, and to
            our surprise, a few stands resembling a farmers' market; offering
            local cheeses, meats, and other snacks. This street originated at
            the trail that led to the Sant Jeroni peak and concluded at the
            monastery, it also led to two other trains that made the ascent to
            the mountain and one that climbed even farther up. This whole area
            was so well-established 1000 meters up on the peak of a steep
            mountain; considering the work, time, and history that is invested
            in an area of this importance and magnitude was inspiring.
          </p>
          <BlogImage picSource={img1}>
            View of Montserrat from the bottom gondola station
          </BlogImage>
          <BlogImage picSource={img2} />
          <p>
            &emsp;We hiked the trail to the peak. Two hours later we discovered
            that the views from Montserrat were indeed incredible yet pale in
            comparison to those from Sant Jeroni. The highest peak of the
            mountain range, overlooking Catalonia at 1,236 meters. The views
            were breathtaking, in large part due to the formation of the
            mountain, Montserrat meaning "serrated mountain" was just so. A few
            points at the peak offered an almost 360-degree view of the stunning
            landscape allowing hikers to step frightfully close to a near 4000ft
            drop...luckily Saturday was not a windy day.
          </p>
          <BlogImage picSource={img8} />
          <p>
            &emsp;On Sunday, my housemate Ben found a sailing group on
            Meetup.com which we signed up for from 1-3pm. The yacht, a small
            racing boat built in the 70's, managed to fit the 8 of us snugly.
            The owner of the boat, originally from Italy, was an older man in
            his 60's. He has been sailing the mediterranean for several years.
            He tries to make it out multiple times a week typically with his
            co-captain, a friend made while sailing. New to the sport, he was
            born in England and lived all around the country. Recently he
            traveled much of Southeast Asia and other parts of Europe, sharing
            with us stories of his years spent exploring the area, looking back
            fondly on his time in Thailand, recommending the country to us all.
          </p>
          <p>
            &emsp;Also on board was an older Australian women. She quickly began
            to intrigue us with her stories of travel, most notably
            participating in the Camino de Santiago. A walk as I understood it
            from the Pyrenees border of Spain and France in the East all the way
            to Santiago de Compostella, above Portugal. A walk measuring about
            750km. The Australian treated us to some stories of her experiences
            along the way. As well as stories of the marathons she ran in her
            youth and others.
          </p>
          <p>
            &emsp;Next to share a story was a Spanish neurologist that perfected
            her English while conducting research on Parkinson's disease at
            Columbia University in New York. Christina was very laid-back and
            easy to talk to. She also understood first-hand some of the
            differences between Spain and the U.S. and shared with us the
            difficulties she faced when feeling homesick. Pointing out the
            differences in cuisine, recalling on a time she tried to purchase
            jamon (pork) and the cheeses she missed from home, to complement a
            baguette and create traditional Spanish tapas. She explained that
            what she found paled in comparison to even the average street food
            in Barcelona. Everyone onboard agreed enthusiastically.
          </p>
          <p>
            &emsp;Her story was inspired by the captain's generous offering of
            tapas as we docked. He also offered beers, chocolates, and fruit for
            us to enjoy and bring our sailing experience to a conclusion.
            Instead of all scurrying off to places we probably didn't really
            have to go to, we sat back and enjoyed each other's company. An
            authentic community experience and taste of Spanish culture,
            relaxing and living in the moment; appreciating a Sunday for its
            true purpose: to kick back and eat well.
          </p>
          <BlogImage picSource={img3}>View from Sant Jeroni.</BlogImage>
          <BlogImage picSource={img4}>
            On Wednesday, we watched a Barca futbol game. Excellent game, tied
            at 1-1 until around the 70-minute mark when Barca scored a second
            goal, and quickly after a third.
          </BlogImage>
          <BlogImage picSource={img5} />
          <BlogImage picSource={img7}>
            Sitges is a small beach town 45 minutes Southwest of Barcelona.
          </BlogImage>
          <BlogImage picSource={img6}>
            We also stopped at Sitges for lunch with time left to walk the city.
          </BlogImage>
          <BlogImage picSource={img9} />
        </div>
      </div>
    );
  }
}

export default Week2;
