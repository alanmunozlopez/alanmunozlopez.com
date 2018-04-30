import React, { Component } from 'react';
import './Projects.css';
import cutsmodeImage from './assets/images/cutsmode.png';
import plantsssLogo from './assets/images/plantsss.png';
import santanderLogo from './assets/images/santander.png';
import coopeuchLogo from './assets/images/coopeuch.jpg';
import ibexLogo from './assets/images/ibex.jpg';

import logoTwitter from './assets/images/twitter.jpg';
import logoPlatzi from './assets/images/platzi.jpg';
import logoGithub from './assets/images/github.png';


const Projects = () => (
  <div className="Projects">
    <div className="Projects-container">
      <div className="Projects-item-image">
        <img src={coopeuchLogo} className="Description-image-display" alt="logo" />
      </div>
      <div className="Projects-item-text color--white">
        <p> Currently I'm working as fullStack developer using Javascript, VueJS library and NodeJS. This with Grid Css, Vuex, Jest, Dockers and more. </p>
      </div>
      <div className="Projects-item-image">
        <img src={cutsmodeImage} className="Description-image-display" alt="logo" />
      </div>
      <div className="Projects-item-text color--white">
        <p> I have designed and fully implemented an app called cutsmode. This app is used by Djs as a complement during their presentations. This app was developed on Ionic framework for <a href="https://itunes.apple.com/us/app/cutsmode/id1253241533" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=app.cutsmode.com" target="_blank">Android.</a> </p>
      </div>
      <div className="Projects-item-image">
        <img src={santanderLogo} className="Description-image-display" alt="logo" />
      </div>
      <div className="Projects-item-text color--white">
        <p> I have worked in two projects, the first one was upgrading the bank client mobile app to the new android platform, this involve restructuring the source code and also upgrading the api and removing deprecated code. Everything was migrated to last Android platform and Java 8 version. The second project was implementing a new solution whose purpose was to provide a channel for incorporating and on boarding new bank customers. This was a web based application, which was implemented using JavaScript language and AngularJS framework, now is available in production in following <a href="https://clienteonline.santander.cl/obd/#/inicio" target="_blank"> URL. </a> </p>
      </div>
      <div className="Projects-item-image">
        <img src={plantsssLogo} className="Description-image-display" alt="logo" />
      </div>
      <div className="Projects-item-text color--white">
        <p> I have implemented a mobile app called plantsss which is about locating plants on my neighborhood. This app was implemented as a native <a href="https://itunes.apple.com/cl/app/plantsss-radar/id1241695864" target="_blank">iOS</a> app using Swift programming language and MySQL as the database also the server side components were deployed on Amazon AWS. </p>
      </div>
      <div className="Projects-item-image">
        <img src={ibexLogo} className="Description-image-display" alt="logo" />
      </div>
      <div className="Projects-item-text color--white">
        <p> In Ibex I worked as a full stack developer. I was in charge of maintaining and updating a wordpress based website, also I have developed a native mobile apps using Swift and Objective-C languages. </p>
      </div>
    </div>
  </div>
)

export default Projects;
