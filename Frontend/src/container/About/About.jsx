import React, { useState } from 'react';

import { AppWrap } from '../../wrapper';
import './About.scss';


const About = () => {

  return (
    <>
      <h2 className="head-text heade-text"><span>User-centric design<br></br> </span>approach that prioritizes  <br></br><span>usability and accessibility.</span></h2>

      <div className="app__profiles">
        <p>Hi there! I'm Chakshu, a developer and designer with a passion for using technology to make a positive impact on the community. I'm committed to creating functional and visually appealing designs that prioritize the user experience. Although I'm new to the field, I'm dedicated to continuous learning and staying up-to-date with the latest trends and advancements. Thank you for stopping by my portfolio, and I look forward to working on projects that make a meaningful difference in the community.</p>
      </div>
      <button><a href="https://drive.google.com/file/d/1N36CVwaciVoixIT04cpf8aJp2hLTAsT0/view?usp=sharing" className="button-re">Link to my Resume</a></button>
    </>
  );
};


export default AppWrap(About, 'about');