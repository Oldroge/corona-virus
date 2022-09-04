import React from 'react';

import github from './images/github.png';
import linkedin from './images/linkedin.png';

import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer-container">
      <div className="footer-infos-container">
        <div className="create-by">
          <p>Created By: Rogério Martins</p>
        </div>
        <div className="images-container">
          <a href="https://github.com/Oldroge" target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="github logo"
              className="social-media-images"
            />
          </a>

          <a href="https://www.linkedin.com/in/roge/" target="_blank" rel="noreferrer">
            <img
              src={linkedin}
              alt="linkedin logo"
              className="social-media-images"
            />
          </a>
        </div>
        <div className="text-made-with">
          <p>Feito com ReactJS, Redux e CSS</p>
        </div>
      </div>
    </footer>
  );
}
