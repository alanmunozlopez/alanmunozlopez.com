import React from 'react';

import './Project.css';

const Project = (props) => (
  <div className='Project-card'>
    <div className ='Project-card-image'>
      <figure className='post-image'>
          <img src={props.image} alt={props.title}/>
      </figure>
    </div>
    <div className='Project-card-details'>
      <p className='Project-card-details-album'> {props.title} </p>
      <p className='Project-card-details-artist'> {props.legend} </p>
    </div>
  </div>
);

export default Project;
