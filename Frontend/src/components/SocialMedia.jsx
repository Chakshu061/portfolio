import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/chakshu0-06/"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/Chakshu061"><BsGithub /></a>
    </div>
    <div>
    <a href="https://www.instagram.com/_.chakshu.___/"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;