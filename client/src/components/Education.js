// Education section on main page

import React from 'react';
import { Title, ListItem } from './StyledTags';

const styles = {
  rootDiv: {},
  title: {
    fontSize: '3rem',
    fontWeight: '900',
    margin: '2vw'
  },
  h3: {}
};

const Education = () => {
  return (
    <div style={styles.rootDiv}>
      <div className="row">
        <Title>Education</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h3 style={styles.h3}>
            University of California, Berkeley Extension, CA
            <br />
            2018-2019
          </h3>
          <ul>
            <ListItem>
              Intensive 3.5 month full-stack web development bootcamp taught on
              location at UC Berkeley
            </ListItem>
          </ul>
          <br />
          <h3 style={styles.h3}>
            University of Tampa, FL
            <br />
            2014-2017
          </h3>
          <ul>
            <ListItem>
              Graduated in 3 years earning a 3.73 GPA with an International
              Business Management degree and a minor in Economics
            </ListItem>
          </ul>
          <br />
          <h3 style={styles.h3}>
            Universitat Autònoma de Barcelona, Spain
            <br />
            Jan - April '16
          </h3>
          <ul>
            <ListItem>
              Study Abroad - Enrolled in multiple economics courses, learning
              first hand about EU policies and their economic implications
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
