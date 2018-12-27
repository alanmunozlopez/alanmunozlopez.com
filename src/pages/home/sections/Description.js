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
        <h3 className="color--gray">
          About
        </h3>
        <p className="color--gray">
          During these last two years  i have been working as a developer mostly focussed on mobile technologies and Javascript, one of my expertises is iOS (using Swift language), Android development as well and Frontend with libraries like Angular, React or Vue. Currently i am working for Coopeuch in Chile, Developing a new proyect with scrum metodology. Previously i have been working as a Lead Developer for Ibex Technologies and mobile developer for Santander Bank Chile.
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
