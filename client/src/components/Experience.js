import React from 'react';
import { Title, ListItem } from './StyledTags';

const styles = {
  rootDiv: {},
  title: {
    // fontShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    fontSize: '3rem',
    fontWeight: '900',
    margin: '2vw'
  },
  h3: {},
  li: {
    listStyleType: 'none',
    marginLeft: '-1vw'
  }
};

const Experience = () => {
  return (
    <div style={styles.rootDiv}>
      <div className="row">
        <Title>Experience</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h3 style={styles.h3}>
            IT Recruiter - KForce
            <br />
            Sep '17 - Feb ’18, San Ramon, CA
          </h3>
          <ul>
            <ListItem>
              Quickly familiarized with IT structure and terminology, gathering
              a strong understanding of the field
            </ListItem>
            <ListItem>
              Focus on building deep relationships with dozens of senior IT
              professionals monthly to match their needs and interests for
              available roles at Fortune 500 companies in the SF Bay Area
            </ListItem>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Experience;
