import React from 'react';

import './Hello.css';

import macImage from '../../../assets/images/mac.png';

import Christmas from '../components/Christmas';
import Snow from '../components/Snow';

const Hello = () => (
  <div className="Hello">
    <Christmas />
    <Snow />
    <div className="Hello-presentation">
      <div className="Hello-name">
        <h2 className="color--white"> Hi, I'm Alan Munoz </h2>
        <h4 className="color--white"> gamer, dog lover and developer. </h4>
      </div>
      <div className="Hello-image">
        <img src={macImage} className="Hello-image-display" alt="logo" />
      </div>
    </div>
  </div>
)

export default Hello;