import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../components/StyledTags';

const styles = {
  row: {
    paddingTop: '6vh',
    paddingBottom: '12vh'
  },
  category: {
    marginTop: '2vh'
  },
  dates: {
    color: 'grey'
  },
  link: {
    color: 'black',
    textAlign: 'center'
  }
};

class BlogHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const currentURL = this.props.match.url;
    return (
      <div className="row justify-content-center" style={styles.row}>
        <Title>Travel Blog</Title>
        <div className="col-sm-6">
          <h2 style={styles.category}>Cuba</h2>
          <h3 style={styles.dates}>&emsp;March, 2017</h3>
          <Link to={`${currentURL}/cuba`} style={styles.link}>
            <h3>
              Important Pre-Departure and General Information (Trump Update)
            </h3>
          </Link>
          <h2 style={styles.category}>Spain (Study Abroad)</h2>
          <h3 style={styles.dates}>&emsp;March, 2016</h3>
          <Link to={`${currentURL}/dublin`} style={styles.link}>
            <h3>Dublin, Ireland</h3>
          </Link>
          <Link to={`${currentURL}/spring-break`} style={styles.link}>
            <h3>Spring Break Road Trip Into Portugal</h3>
          </Link>
          <h3 style={styles.dates}>&emsp;January, 2016</h3>
          <Link to={`${currentURL}/arrival`} style={styles.link}>
            <h3>Arrival (Including Connection in Amsterdam)</h3>
          </Link>
          <Link to={`${currentURL}/week_2`} style={styles.link}>
            <h3>Week 2 in Barcelona (Montserrat, Sailing, and Futbol)</h3>
          </Link>
        </div>
      </div>
    );
  }
}
export default BlogHome;
