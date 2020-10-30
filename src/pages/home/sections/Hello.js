import React from 'react';
import './Hello.css';

import macImage from '../../../assets/images/mac.png';

const Hello = () => (
  <section className="Hello">
    <div className="Hello-presentation">
      <div className="Hello-name">
        <h1 className="color--white"> Hi, I'm Alan Munoz </h1>
        <p className="color--white subtitle"> gamer, dog lover and developer. </p>
      </div>
      <div className="Hello-image">
        <img src={macImage} className="Hello-image-display" alt="logo" />
      </div>
    </div>
  </section>
);

export default Hello;
