import React, { Component } from 'react';
import { bool } from 'prop-types';

import { Source } from './Buttons';

const styles = {
  footer: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    bottom: '1vh',
    borderRadius: 10,
    padding: '1vh',
    width: '100%'
  },
  title: {
    marginBottom: 0
  },
  p: {
    color: 'white'
  },
  links: {
    color: 'white'
  }
};

class Footer extends Component {
  static propTypes = {
    niki: bool
  };

  static defaultProps = {
    niki: false
  };

  render() {
    const niki = this.props.niki;
    return (
      <footer style={styles.footer}>
        <div className="row justify-content-center">
          <div className="col-10" align="center">
            <Source />
            <p style={styles.p}>
              Source code <br />
              {niki ? (
                <a
                  aria-label="Link"
                  href="https://www.linkedin.com/in/niki-moshe-3b038b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.links}
                >
                  Images thanks to Niki Moshe
                </a>
              ) : null}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
