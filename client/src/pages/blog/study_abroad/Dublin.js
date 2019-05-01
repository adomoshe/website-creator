import React, { Component } from 'react';

import { BlogImage } from '../components/BlogMedia';

import img1 from './img/dublin/1.jpg';
import img2 from './img/dublin/2.jpg';
import img3 from './img/dublin/3.jpg';
import img4 from './img/dublin/4.jpg';
import img5 from './img/dublin/5.jpg';

const styles = {
  root: {
    marginTop: '6vh'
  },
  title: {
    marginLeft: 0
  }
};

class Dublin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="row justify-content-center" style={styles.root}>
        <div className="col-sm-6">
          <h1 style={styles.title}>Dublin</h1>
          <BlogImage picSource={img1} />
          <p>
            &emsp;Thinking ahead towards my time abroad I did not envision
            visiting Ireland. I had not heard much about the country besides the
            accents and St. Patrick's Day. A few friends and I decided to visit
            a week before the famed holiday, resulting in an affordable trip and
            much fewer tourists throughout the city. We were thankfully spared
            from Dublin's inclement weather and we found it to be a very
            walkable city as long as you make sure to remember to look right
            then left when crossing the road.
          </p>
          <p>
            &emsp;Our first experience of the city was a free walking tour, this
            service is offered in most cities around the world, and I would
            highly recommend trying it even in your own city. It is donation
            based and the guides are paid by the tourists based on how happy
            they were with the experience. I have been on two tours so far and
            have genuinely enjoyed both. Striking an excellent balance between
            interesting stories, important history, and sightseeing, these tours
            last 2-3 hours and are designed perfectly to gather a wholesome
            sense and understanding of the city. Our guide was fluent in Irish,
            explaining that only a small percentage of the population is,
            blaming the school system for not mandating the study of the
            endangered language for multiple years. Fresh out of school with a
            Master's degree our guide frequented upbeat bars. There he would
            come across tourists and teach them some Irish. He explained,
            apparently well-known with the Irish, a common way to mess with the
            tourists and keep some of the Irish language alive is incorporating
            the Irish word "craic" into conversation, which translates to fun
            (the good, clean kind){' '}
          </p>
          <BlogImage picSource={img3}>St. James's Gate Brewery</BlogImage>
          <BlogImage picSource={img2}>Temple Bar area</BlogImage>
          <p>
            &emsp;The tour offered us tickets to a pub crawl that night,
            boasting of the man from the Netherlands that had so much fun he set
            the record for most consecutive nights to attend...13, so we decided
            to go at least once to see why. Starting off at 7:30 we received a
            voucher for what must be the best drink special in Ireland, 2 pints
            for 4 euro. A pint is typically sold for no less than 5 euro, even
            non-Guinness brands. This was roughly twice the price of the beer in
            Spain. Not to stick out, I ordered mostly Guinness. It is impressive
            how loyal Dubliners are to Guinness, even though it is no cheaper in
            Dublin than the rest of the world, even maybe more expensive; the
            only beers in sight at a local pub are solely Guinness Draught or
            Hop House...a lager made by Guinness. As we learned during our tour
            of Arthur's Brewery at St. James's Gate a pint tastes better in
            Dublin than anywhere else, this is thanks to the proximity of the
            brewery, providing the freshest supply, and as many have attested,
            this beer "does not travel well". Also, every pub follows the 6
            steps to pour the perfect pint; starting with the branded glass, the
            45-degree angle of the glass to the tap, filling to the harp,
            waiting 2 minutes, then topping up, and finally enjoying.
            Surprisingly, a glass only contains around 200 calories, very dark
            and heavy I only made it through two pubs drinking only the porter,
            before switching to something lighter. With such heavy beer, it's
            incredible the Irish have gained such a reputation for excessive
            drinking; but that might also have something to do with the
            distillery in town. The second bar hosted a small Irish dancing
            show, some locals participated and tourists jumped in as well. The
            third bar featured live music, then we were dropped off at a club
            around midnight. The club was smaller than most in Barcelona as
            Dublin was clearly dominated by a pub scene rather than clubs. I
            would highly recommend a pub crawl not only for the drink specials,
            but also for the company. The guides were funny and easy going, and
            we met other tourists from all over.
          </p>
          <BlogImage picSource={img4}>
            Main hall of the Kilmainham Gaol.
          </BlogImage>
          <BlogImage picSource={img5}>Renovated Cell.</BlogImage>
          <p>
            &emsp;The next day we visited the Kilmainham Gaol, a jail built in
            1796, infamous for its deplorable living conditions. Men, women, and
            even children, some as young as 7, arrested for petty theft were
            crammed into little cells or left to sleep in the corridors.
            Prisoners were provided with a single candle for warmth and light,
            having to last 2 weeks. Food was scarce, yet during the potato
            famine some committed crimes in hopes of being thrown in this jail
            to at least sleep under a roof. Many leaders of the Easter Rising
            were executed in the jail by the British. When Ireland gained
            independence the jail was renovated and turned into a historical
            site dedicated to Irish history and nationalism.
            <br />
            <br />
            &emsp;For reading, thanks a million!
          </p>
        </div>
      </div>
    );
  }
}

export default Dublin;
