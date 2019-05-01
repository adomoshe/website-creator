import React, { Component } from 'react';

import { ListItem } from '../../../components/StyledTags';
import { BlogImage } from '../components/BlogMedia';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';

const styles = {
  root: {
    marginTop: '6vh'
  },
  title: {
    align: 'center',
    marginLeft: 0
  },
  lists: {}
};

class Cuba extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="row justify-content-center" style={styles.root}>
        <div className="col-sm-6">
          <h1 style={styles.title}>
            Cuba, Important Pre-Departure and General Information (Trump Update)
          </h1>
          <p>
            Cuba, the largest island in the Caribbean is home to a rich past
            filled with revolutions and a strong national pride.
          </p>
          <br />
          <br />
          <h2>Important Pre-Departure Information</h2>
          <br />
          <p>
            &emsp;Traveling to Cuba from the U.S. presents some logistical
            challenges. Until recently travel to Cuba was not permitted and
            visitors had to fly through Mexico. Relations with Cuba have been
            strained since the Cold War until Obama lifted some parts of the
            embargo toward the end of his presidency. Flights are now available
            mostly through various airports in Florida. This is still true under
            Trump, but it does not seem that he is working toward further
            improving relations. At the time of my trip, from March 3rd to the
            11th, in 2017 it was not necessary to get written pre approval from
            any U.S. office or entity, which may be the case now. The State
            Department has issued 12 categories for permitted travel to Cuba,
            among them journalistic activities, which I claimed was the purpose
            of my trip.
          </p>
          <br />
          <br />
          <p>
            &emsp;Trump's new travel restrictions should not deter those poised
            for a Cuban adventure independent of tour groups. New legislation
            incentivizes booking tour groups to explore Cuba through "People to
            People" aimed trips, but this is not a requirement in order to enter
            Cuba. Longstanding legislation specifies that Americans should not
            conduct business with entities owned by the Cuban military, thus
            funneling American business toward the newly emerging private
            sector. The biggest worry seems to be lodging, since private "casa
            particulars" (further explained below) seem to provide a more
            genuine and highly recommended experience I would book these ahead
            of time, and save email chains as proof of purchase.
          </p>
          <br />
          <br />
          <p>
            &emsp;In my opinion, these travel categories put in place with the
            lifting of the travel ban are instituted mostly to scare off
            would-be travelers. Cuba has always had a booming tourism industry,
            the fact that Americans could historically not directly travel to
            this island that's closer to Key West than Miami, does not mean
            Europeans were similarly forbidden. After Obama reopened diplomatic
            relations shortly before leaving office, these restrictions seem
            like a way to phase in travel to Cuba. This seems to be an effective
            way to prevent a swarm of Spring Breakers from overburdening the
            hospitality industry, causing tensions, and abusing the mojito
            filled beaches of Varadero.
          </p>
          <br />
          <br />
          <p>
            &emsp;The first stumbling block to your Cuba trip is merely a
            figment. A concern much more palpable is that until 2015, the
            Department of State placed Cuba on the State Sponsors of Terrorism
            list, alongside Libya, Iraq, South Yemen, and Syria. Cuba's 35 year
            stint on this list has some implications directly related to your
            travels. This means the American government prohibits American
            financial institutions from doing business in these countries.
          </p>
          <b>
            You cannot use your credit or debit card, or any other financial
            service in Cuba. You will only be able to use the hard cash you
            bring with you!!
          </b>
          <p>
            This is the most important thing to remember and plan for, so bring
            more money than you think you will need because converting it back
            is a lot easier than trying to figure out how to survive in a
            foreign country without any money. This also means that you will be
            carrying a few hundred to several thousand dollars worth of Cuban
            Convertible Pesos around. For this reason, and in general for any
            travel you embark on, I would strongly recommend buying a money
            belt, money sock, or both. I purchased both from Amazon before
            departing. I spread out my cash between my money sock, money belt,
            backpack, and left some in the casa particular I was staying in.
            Another very important piece of information concerns the exchange
            rates. Cuba charges a 10% conversion fee exclusively on USD, meaning
            that when you exchange $100, $10 will be take off the top. You also
            cannot preorder CUC from your local bank, relating back to the whole
            state sponsor of terrorism business. Ironically, the CUC is pegged
            to the USD, so when looking at prices online just remember that
            whatever you do you are not going to get more than around 85 cents
            on the dollar when converting (accounting for other exchange fees).
          </p>
          <b>
            You can only convert your cash in Cuba, meaning you do not want to
            forget to convert all of your money back before leaving, because
            there is a good chance it could be worthless when you return, as no
            place in the U.S. will offer to exchange it.
          </b>
          <p>
            What many recommend to do and what I also ended up doing is ordering
            Euro from my bank and bringing that to Cuba, since other currencies
            are not subject to the 10% fee. This ended up saving me a few bucks,
            so I would recommend checking exchange rates to validate the
            efficacy of this solution.
          </p>
          <br />
          <br />
          <p>
            &emsp;Another important thing to remember concerning cash is that
            Cuba has two currencies, the Convertible Cuban Peso (CUC) which is
            linked to the American dollar as discussed above, and is used
            exclusively by tourists. As well as the (CUP) Cuban Peso which is
            used by locals. The conversion is around 25 CUP to CUC, so confusing
            prices is difficult, if it seems too high its most likely in CUP.
          </p>
          <br />
          <br />
          <p>
            &emsp;Unless you can really pull off the Cuban look and ditch that
            neck anchor of a DSLR you're carrying around, chances are you will
            quickly be identified as a tourist and subject to the CUC prices.
            This will only really affect you at museums, where entrance fee is
            typically 2 CUP for locals and 2 CUC for tourists, this seems like a
            great disparity but considering that locals rake in less than $100 a
            month after taxes and government programs, this disparity suddenly
            comes into perspective.
          </p>
          <br />
          <br />
          <p>
            &emsp;As for phone service on the island, carriers are also not
            allowed to conduct business in Cuba so you can forget about your
            snap streaks. The only way to get an internet connection is to buy a
            Tarjeta Propia at ETECSA or from local kids on the street and you
            can access wifi at various areas throughout the city.
          </p>
          <br />
          <br />
          <BlogImage picSource={img1} />
          <BlogImage picSource={img2} />
          <br />
          <h2>Arrival</h2>
          <br />
          <p>
            &emsp;A taxi ride from Jose Marti International Airport to downtown
            Havana is a little pricy at around 30 CUC; it is approximately a
            thirty minute ride. Once you arrive you quickly see that the streets
            of Havana are just as advertised, filled with classic cars from the
            50s. For the traveler not seeking to stray too far off the beaten
            path, Cuba offers upscale, comfortable accommodation in the most
            popular parts of old Havana, you can even stay in the Hotel Ambos
            Mundos where Hemingway famously stayed. Or, you can simply visit
            Hemingway's room in your free time in the city and opt for a stay in
            what are known as "Casa Particulars". Under Raul Castro's leadership
            some small capitalistic opportunities have emerged, such as opening
            privately owned stores to sell art, tourist eye candy, among others.
            Citizens can now rent out spare bedrooms to tourists, the tourist
            stays in the local's private home, so there is an expectation of
            mutual respect. Of course, this doesn't mean you can't go out at
            night, but just be considerate when coming back. These typically run
            for about 20-35 CUC a night, depending on location and amenities. I
            stayed with a very welcoming and friendly host. She only spoke
            Spanish, but others do also speak English, I booked the Casa through
            Lisbeth (who speaks English) at <b>barque15@gmail.com</b>. She was
            booked for my dates but referred me to a friend that had occupancy
            then. I stayed with her for my full trip.
          </p>
          <br />
          <br />
          <BlogImage picSource={img3}>Casa Particular I stayed at</BlogImage>
          <p>
            &emsp;Since my casa particular was on the outskirts of the most
            touristy areas in the city, restaurants nearby serviced mostly
            locals. What they lacked in curb appeal they more that compensated
            for in taste. As for the price, it seemed a little high, at around
            20-25 so I was not sure in which currency. But, I gladly discovered
            it to be in CUP. Since I did not carry any CUP on me I was charged
            1.5 CUC, the equivalent of about $2 after exchange rates, knowing I
            would be back, I paid a greatly appreciative waiter with a 3 CUC
            coin.
          </p>
          <br />
          <br />
          <BlogImage picSource={img4}>
            Street meat, would probably steer clear
          </BlogImage>
          <p>
            &emsp;In general, Cuba is not known for its cuisine, this is due to
            the historical lack of readily available ingredients and spices as
            Cuba struggled from a weak economy and declines in demand for its
            main export, sugar cane. Remaining Communist in a post Soviet world
            proves difficult for Cuba, which faces an American embargo that not
            only restricts American trade with the island but trade with freight
            ships that have recently docked in Cuba. This leaves Cuba with a
            limited list of trade partners. Historically, the Soviet Union
            topped the list, even provided free supplies and aid during Cuba's
            military alliance and the ensuing Cuban Missile Crisis. Later, Fidel
            and Hugo's friendship blossomed into a thriving trade relationship
            between Cuba and Venezuela; while China has always maintained a high
            rank on that list of trading partners. Otherwise, they are not too
            popular as far as international trade. I would recommend reading up
            on some of Cuba's history before departing, I really enjoyed the
            Netflix series, "The Cuba Libre Story" and any credible information
            I found online.
          </p>
          <br />
          <br />
          <BlogImage picSource={img5}>
            Empanada and Cigar at Plaza de Armas
          </BlogImage>
          <h2>Restaurants</h2>
          <br />
          <p>
            &emsp;Anything found outside Old Havana will probably be on the
            cheaper end while still offering hearty meals. I did get food
            poisoning once on the trip, coming back from Cienfuegos, really not
            much you can do to avoid bad food just carry Advil on you and be
            ready. Touristy restaurants are just what you would expect at the
            prices you would expect. Service at both can be spotty since Cuban
            dining is European style and not accustomed to tipping. This is
            especially the case with state run restaurants as opposed to the
            "Paladares" which are privately owned, and more motivated to make a
            profit. Spotting the differences between the two seems impossible
            until it dawns on you that you have been waiting for the waiter to
            walk by and hand out menus for the past thirty minutes and you
            realize its a state run spot. My only experience with this situation
            was at Plaza de Armas in Old Havana where after admiring the view
            for a long while, a group of older ladies informed me that I was
            going to have to be much more proactive throughout this dining
            experience. Other restaurants were crowded and I had already secured
            a nice table outside, so I decided to get out my wallet and head to
            the bar. Paying at the bar and adding a generous tip seemed to
            correct the situation and I was quickly enjoying my Cigar and
            Empanada meal.
          </p>
          <br />
          <br />
          <BlogImage picSource={img6}>
            Fabrica de Arte Cubano main stage
          </BlogImage>
          <BlogImage picSource={img7} />
          <br />
          <h2>Nightlife</h2>
          <br />
          <p>
            &emsp;Fabrica de Arte Cubano was highly rated and after going twice,
            I would rate as a must. The building looks like a warehouse from
            outside, and offers an incredible mix between an art gallery and a
            nightclub. Featuring a large main stage and another smaller dance
            floor, as well as multiple bars throughout, and even a restaurant.
            Alcohol is reasonably priced and the art is interesting, especially
            after a few drinks. Drinks are not paid for at the bar, rather, each
            entrant receives a card that is stamped with the price of the drink
            each time one is served, and must be paid for when exiting. Losing
            this card will cost 30 CUC. Another thing to watch out for are local
            women that seem a little too friendly, they may be on the clock.
          </p>
          <br />
          <br />
          <p>
            &emsp;On my second night, Dutch guests staying at the same apartment
            building as my casa graciously invited me out to Teatro Mella for
            the annual Fiesta Del Tambor. One of the Dutch guests was a dance
            instructor in the Netherlands and took the other, one of her
            students, with her to appreciate the culture in which the dances
            they learned originated. The instructor had visited Cuba many times
            before and introduced us to a local she got to know pretty well. The
            show started with an intricate display of singing and dancing in the
            lobby, until we moved into the theater for the main performance.
          </p>
          <br />
          <br />
          <h2>Cienfuegos and Trinidad</h2>
          <p>
            &emsp;I also want to mention the benefits of organized travel. Most
            hotels in Old Havana have an area for trip organizers to set up and
            display the various trips or activities they offer. I went on an
            overnight trip to Cienfuegos and Trinidad which is about a 4 hour
            drive from Havana. This trip cost 150 CUC and was well worth it. We
            received breakfast lunch and dinner both days, stayed the night at a
            quaint spot in the mountains, and had guided tours in the cities. I
            would recommend this option if you want to get out of Havana for a
            while, they also do day trips and other activities. If you are
            traveling alone this is also a great way to meet other travelers.
          </p>
          <br />
          <p>
            &emsp;Cuba was an absolute blast and I would highly recommend
            visiting. It is not the typical touristy destination, it is very
            affordable and and offers many spots to visit besides Havana. You
            can really tailor your trip to your comfort level, you can visit
            different parts of the island or you can opt to stay in Havana or
            even relax at an all inclusive in Varadero for a while.
          </p>
          <br />
          <br />
          <p>
            Below is a daily log I kept of what I spent money on to give a sense
            of the prices in Cuba, as well as a few items to remember to pack.
          </p>
          <br />
          <div>
            <h3>Pack</h3>
            <ul>
              <ListItem>Bug Spray</ListItem>
              <ListItem>Money belt and socks</ListItem>
              <ListItem>Flashlight</ListItem>
              <ListItem>Maps</ListItem>
              <ListItem>Sunscreen</ListItem>
              <ListItem>Advil/First Aid</ListItem>
              <ListItem>Rain gear</ListItem>
              <ListItem>Energy bars</ListItem>
            </ul>
          </div>
          <br />
          <div style={styles.lists}>
            <h3>Money Spent</h3>
            <h3>Started: 655 CUC</h3>
            <h3>Day 1</h3>
            <ul>
              <ListItem>25 taxi</ListItem>
              <ListItem>60 for two nights plus breakfast</ListItem>
              <ListItem>5 music tip</ListItem>
              <ListItem>4 local restaurant</ListItem>
              <ListItem>1 water</ListItem>
              <ListItem>6 meal next to hotel</ListItem>
              <ListItem>5 taxi to FAB</ListItem>
              <ListItem>2 entrance to FAB</ListItem>
              <ListItem>12 Drinks</ListItem>
              <ListItem>8 cab</ListItem>
            </ul>
            <h3>
              Spent Today: 128 <br />
              Remaining: 527
            </h3>
          </div>
          <br />
          <div style={styles.lists}>
            <h3>Day 2</h3>
            <ul>
              <ListItem>2 Water</ListItem>
              <ListItem>5 painting</ListItem>
              <ListItem>152 excursion </ListItem>
              <ListItem>6 crepe and water</ListItem>
              <ListItem>3 wifi card</ListItem>
              <ListItem>2 hat</ListItem>
              <ListItem>30 cigars</ListItem>
              <ListItem>3 local restaurant</ListItem>
            </ul>
            <h3>
              Spent Today: 203 <br />
              Remaining: 324
            </h3>
          </div>
          <br />
          <div style={styles.lists}>
            <h3>Day 3</h3>
            <ul>
              <ListItem>1 Water</ListItem>
              <ListItem>35 painting</ListItem>
              <ListItem>2 museum </ListItem>
              <ListItem>1 tour</ListItem>
              <ListItem>5 empanada and cigar</ListItem>
              <ListItem>2 water</ListItem>
              <ListItem>3 water</ListItem>
              <ListItem>2 cab</ListItem>
              <ListItem>10 ticket</ListItem>
              <ListItem>5 taxi</ListItem>
            </ul>
            <h3>
              Spent Today: 66 <br />
              Remaining: 258
            </h3>
          </div>
          <br />
          <div style={styles.lists}>
            <h3>Day 4 (on excursion)</h3>
            <ul>
              <ListItem>1 music tip</ListItem>
              <ListItem>5 breakfast</ListItem>
              <ListItem>3 rum</ListItem>
              <ListItem>1 beer</ListItem>
            </ul>
            <h3>
              Spent Today: 9 <br />
              Remaining: 249
            </h3>
          </div>
          <br />
          <div style={styles.lists}>
            <h3>Day 5 (on excursion)</h3>
            <ul>
              <ListItem>2 souvenir</ListItem>
              <ListItem>1 water</ListItem>
              <ListItem>77 last nights at casa</ListItem>
              <ListItem>3 dinner</ListItem>
              <ListItem>2 taxi</ListItem>
              <ListItem>2 entrance to FAB</ListItem>
              <ListItem>2 taxi</ListItem>
            </ul>
            <h3>
              Spent Today: 89 <br />
              Remaining: 160
            </h3>
          </div>
          <br />
          <div style={styles.lists}>
            <h3> Day 6</h3>
            <ul>
              <ListItem>1 water</ListItem>
              <ListItem>5 lunch</ListItem>
            </ul>
            <h3>
              Spent Today:
              <br /> 6 Remaining: 154
            </h3>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Cuba;
