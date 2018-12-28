import React from 'react';

import './Projects.css';

import Project from '../components/Project';

import coopeuchLogo from '../../../assets/images/coopeuch.jpg';
import cutsmodeImage from '../../../assets/images/cutsmode.png';
import plantsssLogo from '../../../assets/images/plantsss.png';
import santanderLogo from '../../../assets/images/santander.png';
import ibexLogo from '../../../assets/images/ibex.jpg';

const Projects = () => (
  <div className='Projects'>
    <h3> Projects </h3>
    <div className='Projects-cards'>
      <Project
        title='Coopeuch'
        legend='Currently I am working as fullStack developer using Javascript: VueJS, ReactJS and NodeJS. This with Grid Css, Vuex, Redux, Express, Jest and more.'
        image={coopeuchLogo}
      />
      <Project
        title='CutsMode'
        legend='I have designed and fully implemented an app called cutsmode. This app is used by Djs as a complement during their presentations. This app was developed on Ionic framework for iOS and Android.'
        image={cutsmodeImage}
      />
      <Project
        title='Santander Chile'
        legend='I have worked in two projects, the first one was upgrading the bank client mobile app to the new android platform, this involve restructuring the source code and also upgrading the api and removing deprecated code. Everything was migrated to last Android platform and Java 8 version. The second project was implementing a new solution whose purpose was to provide a channel for incorporating and on boarding new bank customers. This was a web based application, which was implemented using JavaScript language and AngularJS framework, now is available in production in following URL.'
        image={santanderLogo}
      />
      <Project
        title='Plantsss'
        legend='I have implemented a mobile app called plantsss which is about locating plants on my neighborhood. This app was implemented as a native iOS app using Swift programming language and MySQL as the database also the server side components were deployed on Amazon AWS.'
        image={plantsssLogo}
      />
      <Project
        title='Ibex'
        legend='In Ibex I worked as a full stack developer. I was in charge of maintaining and updating a wordpress based website, also I have developed a native mobile apps using Swift and Objective-C languages.'
        image={ibexLogo}
      />
    </div>
  </div>
);

export default Projects;
