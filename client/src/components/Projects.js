// Project section on main page

import React from 'react';
import ProjCarousel from './ProjCarousel';
import { Title } from './StyledTags';

const styles = {
  rootDiv: {},
  projectTitle: {},
  links: {},
  p: {}
};

const Projects = () => {
  return (
    <div style={styles.rootDiv}>
      <div className="row">
        <Title>Projects</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <ProjCarousel show="untrending" />
          <br />
          <h2 style={styles.projectTitle}>Untrending</h2>
          <a
            aria-label="Github Repo"
            href="https://github.com/adomoshe/untrending"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.links}
            className="links"
          >
            Github Repo
          </a>
          &nbsp;|&nbsp;
          <a
            aria-label="Link"
            href="https://untrending.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.links}
            className="links"
          >
            Deployed
          </a>
          <br />
          <p style={styles.p}>
            Summary:
            <br />
            &emsp;Full-stack news app that displays similar stories from news sources
            opposite to what the user would typically browse, broadening
            people's perspectives. <br />
            <br />
            Tech:
            <br />
            &emsp;JavaScript, Node.js, Heroku, Sequelize.js, MySQL, Express.js,
            Passport.js, Authentication, NewsAPI, HTML, CSS, jQuery, Bootstrap
          </p>
        </div>
        <br />
        <div className="col-md-3">
          <ProjCarousel show="nosh" />
          <br />
          <h2 style={styles.projectTitle}>Nosh</h2>
          <a
            aria-label="Github Repo"
            href="https://github.com/adomoshe/nosh"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.links}
            className="links"
          >
            Github Repo
          </a>
          &nbsp;|&nbsp;
          <a
            aria-label="Link"
            href="https://adomoshe.github.io/nosh/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.links}
            className="links"
          >
            Deployed
          </a>
          <br />
          <p style={styles.p}>
          Summary:
            <br />
            &emsp;Recipe searching interface filtering Yummly API results based on
            user query by dish or by ingredients. <br />
            <br />
            Tech:
            <br />
            &emsp;JavaScript, Yummly APIs, HTML, CSS, jQuery, Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
