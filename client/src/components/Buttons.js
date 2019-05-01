import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactSVG from '../react.svg';

const Github = () => (
  <IconButton
    aria-label="Github Link"
    href="https://github.com/adomoshe"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
  </IconButton>
);

const LinkedIn = () => {
  return (
    <IconButton
      aria-label="LinkedIn Link"
      href="https://www.linkedin.com/in/adoranmoshe"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="1x" color="white" />
    </IconButton>
  );
};

const Medium = () => (
  <IconButton
    aria-label="Medium Link"
    href="https://medium.com/@adoran.moshe"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={['fab', 'medium-m']} size="1x" color="white" />
  </IconButton>
);

const Email = () => (
  <IconButton
    aria-label="Email Link"
    href="mailto:adoran.moshe@gmail.com"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon="at" size="1x" color="white" />
  </IconButton>
);

const Source = () => (
  <Button
    aria-label="Github Link"
    href="https://github.com/adomoshe/portfolio"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={reactSVG} className="react-svg" alt="react SVG" />
  </Button>
);

export { Github, LinkedIn, Medium, Email, Source };
