// Technical skills section on main page

import React from 'react';
import { Title, ListItem } from './StyledTags';

const frontSkillsArr = [
  'React.js',
  'JavaScript (ES6)',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Material UI',
  'jQuery'
];

const backSkillsArr = [
  'Node.js',
  'Express.js',
  'Passport.js',
  'Authentication',
  'SQL',
  'MySQL',
  'Sequelize.js',
  'MongoDB',
  'Firebase',
  'Heroku'
];

const styles = {
  rootDiv: {},
  section: {
    fontSize: '2rem',
    fontWeight: '900'
  },
  p: {}
};

const Skills = () => {
  return (
    <div style={styles.rootDiv}>
      <div className="row">
        <Title>Technical Skills</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <h3 style={styles.section}>Front</h3>
          <ul>
            {frontSkillsArr.map((skill, index) => {
              return <ListItem key={index}>{skill}</ListItem>;
            })}
          </ul>
        </div>
        <div className="col-sm-3">
          <h3 style={styles.section}>Back</h3>
          <ul>
            {backSkillsArr.map((skill, index) => {
              return <ListItem key={index}>{skill}</ListItem>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
