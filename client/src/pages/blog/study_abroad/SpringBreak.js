import React, { Component } from 'react';

import { BlogImage, BlogVideo } from '../components/BlogMedia';

import img1 from './img/spring_break/1.jpg';
import img2 from './img/spring_break/2.jpg';
import img3 from './img/spring_break/3.jpg';
import img4 from './img/spring_break/4.jpg';
import img5 from './img/spring_break/5.jpg';
import img6 from './img/spring_break/6.jpg';
import img7 from './img/spring_break/7.jpg';
import img8 from './img/spring_break/8.jpg';
import img9 from './img/spring_break/9.jpg';

const styles = {
  root: {
    marginTop: '6vh'
  },
  title: {
    marginLeft: 0
  }
};

class SpringBreak extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="row justify-content-center" style={styles.root}>
        <div className="col-sm-6">
          <h1 style={styles.title}>Spring Break</h1>
          <BlogVideo vidSource="https://www.youtube.com/embed/JztdKoEgv_Y" />
          <p>
            &emsp;After learning that we could rent a car in Europe, unlike the
            U.S. where the minimum age to rent is 24, we decided to give it a
            go. A few of my good friends here, Sam, Andres, Ben, and I were
            locked in for the experience. Although we talked about the trip for
            weeks no actual planning began until a week beforehand. We reserved
            the car for the nine days starting on Saturday the 19th of March. A
            couple days later we went ahead and booked a hostel, and two
            Airbnbs; leaving the remaining four nights up in the air.
          </p>
          <BlogImage picSource={img1}>
            (Ben, Andres, me, Sam), from left to right. Taken at a rest area in
            Spain
          </BlogImage>
          <p>
            &emsp;The plan was to drive 12 hours the first day to Porto,
            Portugal, traversing the Iberian Peninsula. This took care of a
            large chunk of the approximately 3,200 km we planned on covering.
            Skipping on the way the Basque Country, cities such as San
            Sebastian, Pamplona, and Bilbao which our program already introduced
            us to. We also decided to skip Madrid, a city we thought was too big
            for us to tackle in a day or two and would cut into time better
            spent in smaller destinations. The plan was set and we were off.
          </p>
          <p>
            &emsp;To save time and money we decided to make a quick grocery stop
            at a supermarket to buy some tapas ingredients and snacks for the
            drive. Since we were limited on funds and just cheap in general toll
            roads were out of the question; increasing the total driving time by
            about 15%. This quickly turned out to be worthwhile; even though we
            spent more time in the car, the countryside is better observed from
            the national roads, our manual VW Golf was incredibly efficient on
            gas, and Enterprise ended up not charging us for the almost 1,500 km
            over the allowance that we put on their new Volkswagen.{' '}
          </p>
          <p>
            &emsp;A detail we missed when planning was the extent to which the
            terrain was mountainous near the Portuguese border, resulting in a
            tiring, dark, zigzagging route that worst of all incited a
            frustration for missing out on what must have been breathtaking
            views. Here we also experienced how impatient Portuguese drivers can
            be. Older, tiny European model cars, would tailgate to no end.
            Nonetheless, we arrived in Porto and with surprising ease located
            the hostel and a parking spot, we made it to our room and went right
            to sleep. A few hours later we would be woken up by a loud
            Portuguese teens cheering on a soccer match, still not sure who was
            playing at 7:30 in the morning.
          </p>
          <BlogImage picSource={img4}>
            Dom Luis I Bridge spanning over the Douro river, designed by Leopold
            Valentin, a student of Gustave Eiffel
          </BlogImage>
          <p>
            &emsp;We left the hostel at around 10am, a record-setting time,
            remaining unbroken throughout the trip. We first went on the city
            tour of Porto, learning about Portugal's and the city's long history
            of which I don't remember much. The story about Port wine, however,
            I can recall. Our tour guide, which also happened to be a guide at a
            local winery explained that the grapes are grown in the Douro Valley
            in the northern provinces of the country. Here, a microclimate
            exists, ranging temperatures from freezing to well over a hundred
            degrees. Port wine is recognized world-wide thanks to the grapes
            growing in these conditions. Ironically, these grapes are very
            sweet, therefore, the wine is not fermented thoroughly, rather, it
            is mixed with brandy halfway through the process to "fortify" the
            wine. The brandy kills the yeast responsible for the fermentation,
            so as not to create a wine too high in alcohol content, while also
            retaining some of the natural sweetness of the grape. These
            properties allow Port to be aged for much longer than other wines.
            Typically a dessert wine, it still breaks the charts averaging
            around 20% alcohol content. Unfortunately, we did not have time to
            visit the wineries just across the river, but we did sample some
            after lunch, we all agreed Tawny Port was too sweet to drink
            heavily.
          </p>
          <p>
            &emsp;A favorite dessert in the city and throughout Portugal was the
            Pasteis de Nata. We were told to try some during the tour, a great
            suggestion. A quick Wikipedia search revealed the dessert dates back
            to the 18th century and has to do with monks, anyway, it's
            delicious, I had at least a dozen. Porto was a beautiful city, home
            to friendly people. Relatively small, but incredibly vibrant and
            colorful, a city worth returning to.
          </p>
          <BlogImage picSource={img6}>Praca do Comercio</BlogImage>
          <BlogImage picSource={img2}>Tuk Tuk ride around Lisbon</BlogImage>
          <p>
            &emsp;Lisbon, our next stop, this time for 2 nights and a full day,
            is the first...and only city I researched thoroughly beforehand.
            Sadly, we did not embark on a city tour here, or any of the
            following cities. We were really very inefficient tourists, barely,
            and sometimes not at all making it to the main sights. In Lisbon we
            spent a considerable amount of time walking around our neighborhood
            of Alfama. One of the older neighborhoods in the city, dating back
            to the 12th century it stood unscathed during the earthquake in
            1755. A picturesque and wholly incredible area, it was worthwhile to
            explore. We made our way to the Praca do Comercio where we hung
            around by the Tagus river and drank some wine. Dabbling in
            creativity we shot some artistic videos of us walking in slow motion
            through the square, leaving the camera stationary and recording on a
            time lapse, creating the illusion that we walked at a normal pace
            while others were zooming by us. Besides for looking like a group of
            mentally challenged apes learning to walk, we made some art. With
            wine still left in the bottle, we walked over to the tuk tuks parked
            nearby, we soon learned drinking in a car is legal in Portugal. The
            electric engine powered the three wheels, generating a familiar hum
            as we visited the Church of Sao Roque, Miraduoro de Senhora do
            Monte, the highest point in the city overlooking the red tile roofs,
            the Monastery of Sao Vicente de Fora, Lisbon Cathedral, and the
            Church of Santa Engracia. As things inevitably do, our plan fell
            into place and we managed to see the sights. We were dropped off in
            Alfama, grabbed a beer with the driver, and went to the cafe by our
            house for some Wi-Fi.
          </p>
          <BlogImage picSource={img5}>Overlooking Lisbon</BlogImage>
          <p>
            &emsp;Sunday and Monday nights were spent in Lisbon, the nightlife
            left something to be desired. We walked around for a couple hours
            late Monday evening and happened upon a group of street musicians
            playing homemade instruments. The music drew in a large crowd and
            comprised of a soothing Blues type beat. We stayed to the end then
            continued. Coming upon a friendly, fellow exchange student from
            Belgium, she shared traveling stories and tips then pointed us to a
            nearby kebab joint; we grabbed a durum and called it a night.
          </p>
          <p>
            &emsp;The next morning, thinking we had time to kill before Seville,
            we drove forty minutes west, away from Spain, to Sintra, as
            recommended by our tuk tuk driver. Not bothering to stop at the city
            we drove straight to the beach, another twenty minutes west, we came
            upon a quaint little town. The water was freezing, but a pleasant
            photo opportunity, not much more. We were then about six hours away
            from Seville, promising our Airbnb host we would arrive around
            9:00pm, it was already 4:00, and we didn't remember at the time but
            we forgot to account for the time difference. We crossed Lisbon and
            got ourselves on a toll road, reducing the total driving time to
            four hours. We made it to the Airbnb at 11:00pm that night.
          </p>
          <BlogImage picSource={img7} />
          <p>
            &emsp;Pre-departure, our host mom, Ana, explained to Ben and I about
            Semana Santa, translated means holy week. A Catholic annual
            commemoration of the passion of Jesus by performing penance
            processions during the last week of Lent. These processions take
            place all over Spain and the Christian world, but among the most
            notable is Seville. The first day in Seville we visited the Torre
            del Oro, a military watchtower from the 13th century, the Alcazar of
            Seville, and the Seville Cathedral. Unanimously agreed upon the
            highlight of the day was the Teteria al Sultan. Securing outdoor
            seating and a hookah, we enjoyed incredible tea complemented by
            Baklava, and a great view. We spent the remainder of the afternoon
            working up a head buzz and relaxing.{' '}
          </p>
          <BlogImage picSource={img3}>Meeting with David in Seville</BlogImage>
          <p>
            &emsp;As evening came the streets quickly filled, slowing our walk
            to do more sightseeing, then stopping us altogether; we could not
            break through the crowds. Semana Santa was in full swing, we were
            packed tighter than the metros in the morning. Loud drums banged,
            men, women, and kids, dressed in heavy, straight, single colored
            cloth complete with pointed hats, carrying candles the length of
            walking sticks marched behind. Hundreds passed, then the banging
            grew louder, finally, a large gold plated wooden structure of Jesus
            carrying the cross, carefully decorated with flowers and candles
            appeared. Everyone was silent, the drumming was overpowering and on
            a set marching beat, presumably to keep the men carrying the large
            structure in unison. Not long after, an equally impressive Mother
            Mary passed by to the same effect. The procession was powerful and
            lasted well into the night. Most streets in the city center were
            blocked and the procession seemed to run on a loop, for hours the
            streets were occupied. We agreed to meet up with our friend David
            and his sister at a bar that night, as our trips coincided at
            Seville. We tried reaching the bar that was supposedly a
            seven-minute walk from us for close to an hour, to no avail. Just on
            one of the seven nights the number of people; believers, spectators,
            and participants out was incredible. The city was consumed with the
            processions, quite the tradition, it was a powerful and beautiful
            sight.
          </p>
          <BlogImage picSource={img8}>Placa de Espanya</BlogImage>
          <p>
            &emsp;We met up with David the next day. We grabbed lunch, visited
            the city center, old town, and Placa de Espanya. Placa de Espanya
            has been featured in numerous films, including Start Wars, Lawrence
            of Arabia, and The Dictator. Quite a sight, it is clear why so many
            movies have used it as a shooting location. The square features
            incredible architecture highlighted by a beautiful pond, filled with
            an array of colors of fish, complete with horse-drawn carriages
            circling the entrance and surrounding park. We parted ways at the
            car. Stopping at McDonald's before leaving the city, at that point
            almost a ritual, then left.
          </p>
          <BlogImage picSource={img9}>
            The Yurt in the mountains near Granada
          </BlogImage>
          <p>
            &emsp;Seville was the last Airbnb we booked before leaving
            Barcelona. That day when browsing Airbnb for accommodation in or
            close to Granada we found a Yurt in the hills of the Sierra Nevada,
            about an hour South of the city. Booked and ready to go we made it
            to the Yurt in time to enjoy some wine by the campfire. The property
            was well taken care of and housed an outdoor shower ingeniously
            engineered to overlook the mountains, supplied by water captured
            from the mountains, then heated by a boiler fueled by a propane gas
            tank. The set-up was unreal. The Yurt was equally as impressive,
            colorful rugs decorated the floor, thick insulation protected from
            wind and kept the area warm. Thick mattresses and sheets complete
            with wool blankets proved to be more comfortable than a hotel.{' '}
          </p>
          <p>
            &emsp;Our host told us he had been living on the property for a
            couple years, we all agreed getting away like that sounds radical
            and fun. Later, talking, dissecting the reasons someone would want
            to live off on their own for so long working hard to become
            self-sustainable, a few reasons came to mind. We agreed he must
            enjoy his leisure time and love nature. A need for privacy and
            self-sustainability is a key criteria in a reason we overlooked. The
            following night Andres and I came up to his cabin, to buy cannabis
            oil he offered us previously, we ended up talking for a while and
            listened to stories of his out of body experiences trying Ayahuasca
            in India. We were intrigued and asked more questions. With a sense
            of pride and accomplishment, he mentioned his website, where he has
            amassed a million followers so far. We pushed for more information,
            sensing our curiosity and possibly open-mindedness; he shared a
            summary of his research from the past twenty years. Mark has been
            working with a community of conspiracy theorists to help shine light
            on the notion that the world is flat. Known as the flat earth
            theory, it has gained a lot of popularity in the past few years and
            has been around for centuries. It is unlike the old European flat,
            fall of the world theory of the time of Colombus. New and improved,
            too long to effectively summarize here, it indulges in a lot of talk
            of Freemasons, conspiracies, government secrets, hoaxes, and fake
            moon landings. Either way discussing the theory with a devoted
            believer and researcher was intriguing to say the least.
          </p>
          <p>
            &emsp;This topic sparked long arguments around the campfire and
            throughout car rides. The previous day was spent in beaches near the
            Yurt, going into town for lunch, and driving around the
            mountainside. That morning afternoon we awoke, packed, drank tea,
            then drove to Granada. Originally, we planned to spend the previous
            day at Granda, as well as waking up earlier to have more time in the
            city. We spent two of our four hours in the city sitting at a bar
            researching accommodation in Valencia for that night, we couldn't
            find a spot we all agreed on so we ended up sleeping in the car... a
            terrible idea. Here, in the Andalucia region of Spain, a true tapas
            culture exists. Tapas, ranging from jamon on baguette to squid in
            its own ink, is served with every glass of beer. It really is a
            great reason to keep drinking. The other couple hours we walked
            around the city, stumbling across the Alhambra, but unable to enter,
            due to poor planning.
          </p>
          <p>
            &emsp;We routed the car to the beach in Valencia, arrived, cracked
            the windows, turned the engine off and tried to sleep. At one point
            I tried sleeping on the beach, probably a better idea in the summer,
            the cold breeze made it a little uncomfortable. We all got a few
            hours of sleep, but still somehow didn't actually get moving until
            around noon. Valencia was more modern than the other cities, we
            walked around the city center, visited some museums, ate at a nice
            restaurant for our last lunch, and watched some locals play soccer.
            We passed the day slowly, vacuumed the car and washed it. Seeing how
            tired we were, instead of staying out and having to wake up very
            early the next morning, we drove to Barcelona that night, and parked
            the car near our homestay. We all went home then returned the car in
            the morning.
          </p>
          <BlogVideo vidSource="https://www.youtube.com/embed/lupskQ4qyDo" />
        </div>
      </div>
    );
  }
}

export default SpringBreak;
