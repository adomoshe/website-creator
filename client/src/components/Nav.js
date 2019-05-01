// Nav component for all pages

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import styled from 'styled-components';

import { Github, LinkedIn, Medium, Email } from './Buttons';
import breakpoints from './breakpoints';

const styles = {
  nav: {
    zIndex: '5',
    top: 0,
    marginTop: '1vh',
    position: 'fixed',
    width: '100%',
    paddingRight: '3vh'
  },
  navTitle: {
    float: 'left',
    color: 'white',
    margin: 'auto'
  },
  menuBtn: {
    marginRight: '1vh',
    marginLeft: '1vh',
    float: 'left',
    color: 'white'
  },
  navBtns: {
    float: 'right'
  },
  s: {
    float: 'right'
  }
};

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

const StyledRegLink = styled.a`
  :hover {
    text-decoration: none;
  }
`;

const StyledIconButton = styled(IconButton)`
  :focus {
    outline: none !important;
  }
`;

const StyledBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  :focus {
    outline: none;
  }
`;

class Nav extends Component {
  state = {
    open: false,
    anchorEl: null
  };

  menuClick = e => {
    this.state.open
      ? this.setState({ open: false, anchorEl: null })
      : this.setState({ open: true, anchorEl: e.currentTarget });
  };

  // Thanks to https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery for this scroll animation
  scrollAnimate(scrollDuration = 1800) {
    const cosParameter = window.scrollY / 2;
    let oldTimestamp = performance.now();
    let scrollCount = 0;
    const step = (newTimestamp = 1000) => {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(
        0,
        Math.round(cosParameter + cosParameter * Math.cos(scrollCount))
      );
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  render() {
    document.activeElement.blur();
    const { anchorEl, open } = this.state;

    const phone = () => {
      if (window.innerWidth <= breakpoints.s) {
        return <ContactMenu />;
      } else {
        return (
          <div>
            <StyledBtn
              aria-label="Scroll to top"
              onClick={() => {
                this.scrollAnimate();
              }}
            >
              <h2 style={styles.navTitle}>Ado</h2>
            </StyledBtn>
            <span className="nav-buttons" style={styles.navBtns}>
              <Github />
              <LinkedIn />
              <Medium />
              <Email />
            </span>
          </div>
        );
      }
    };

    return (
      <nav style={styles.nav}>
        <div>
          <StyledIconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            style={styles.menuBtn}
            onClick={this.menuClick}
          >
            <MenuIcon />
          </StyledIconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            disableAutoFocusItem={true}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            onClose={this.menuClick}
            open={open}
          >
            <StyledLink to={'/'}>
              <MenuItem onClick={this.menuClick}>
                <h3>Home</h3>
              </MenuItem>
            </StyledLink>
            <StyledRegLink
              aria-label="Link"
              href="https://drive.google.com/file/d/1U2js0HrZ4UjRTq4rrW70ZfFbVTOKsdf0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem onClick={this.menuClick}>
                <h3>Resume</h3>
              </MenuItem>
            </StyledRegLink>
            <StyledLink to={'/blog'}>
              <MenuItem onClick={this.menuClick}>
                <h3>Blog</h3>
              </MenuItem>
            </StyledLink>
            <StyledLink to={'/games'}>
              <MenuItem onClick={this.menuClick}>
                <h3>Games</h3>
              </MenuItem>
            </StyledLink>
          </Menu>
        </div>
        {phone()}
      </nav>
    );
  }
}

class ContactMenu extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  menuClick = e => {
    this.state.open
      ? this.setState({ open: false, anchorEl: null })
      : this.setState({ open: true, anchorEl: e.currentTarget });
  };

  render() {
    document.activeElement.blur();
    const { anchorEl, open } = this.state;

    return (
      <div style={styles.s}>
        <StyledBtn
          aria-owns={open ? 'links' : undefined}
          aria-haspopup="true"
          style={styles.menuBtn}
          onClick={this.menuClick}
        >
          <h2 style={styles.navTitle}>Ado</h2>
        </StyledBtn>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          disableAutoFocusItem={true}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          onClose={this.menuClick}
          open={open}
        >
          <StyledRegLink
            aria-label="Link"
            href="https://github.com/adomoshe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem onClick={this.menuClick}>
              <h3>Github</h3>
            </MenuItem>
          </StyledRegLink>
          <StyledRegLink
            aria-label="Link"
            href="https://www.linkedin.com/in/adoranmoshe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem onClick={this.menuClick}>
              <h3>LinkedIn</h3>
            </MenuItem>
          </StyledRegLink>
          <StyledRegLink
            aria-label="Link"
            href="https://medium.com/@adoran.moshe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem onClick={this.menuClick}>
              <h3>Medium</h3>
            </MenuItem>
          </StyledRegLink>
          <StyledRegLink
            aria-label="Link"
            href="mailto:adoran.moshe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem onClick={this.menuClick}>
              <h3>Email</h3>
            </MenuItem>
          </StyledRegLink>
        </Menu>
      </div>
    );
  }
}

export default Nav;
