import React from 'react';

import './Description.css';

import alanImage from '../../../assets/images/alan.png';
import logoTwitter from '../../../assets/images/twitter.jpg';
import logoPlatzi from '../../../assets/images/platzi.jpg';
import logoGithub from '../../../assets/images/github.png';


const Description = () => (
  <div className="Description">
    <div className="Description-about-container">
      <div className="Description-image">
        <img src={alanImage} className="Description-image-display" alt="logo" />
      </div>
      <div className="Description-about">
        <h2 className="color--gray">
          About
        </h2>
        <p className="color--gray">
        During these last six years I have been working as a developer mostly focussed on mobile technologies and Javascript, one of my expertises is iOS (using Swift language), Android development as well, React Native for both and Frontend with libraries like Angular, React or Vue. Currently I am working for Globant Chile, Developing a new proyect with scrum methodology for HBO. Previously I have been working as a Javascript full-stack developer for Coopeuch, Lead Developer for Ibex Technologies and mobile developer for Santander Bank Chile. And thanks for read :) 
        </p>
      </div>
      <div className="Description-social-networks">
        <a rel="noopener noreferrer" href="https://twitter.com/alanmunozlopez" target="_blank">
          <img src={logoTwitter} className="Description-social-icons" alt="logo" />
        </a>
        <a rel="noopener noreferrer" href="https://platzi.com/@alanmunozlopez/" target="_blank">
          <img src={logoPlatzi} className="Description-social-icons" alt="logo" />
        </a>
        <a rel="noopener noreferrer" href="https://github.com/alanmunozlopez" target="_blank">
          <img src={logoGithub} className="Description-social-icons" alt="logo" />
        </a>
      </div>
    </div>
  </div>
)

export default Description;
