import React from 'react';

import './Projects.css';

import Project from '../components/Project';

import worksitelabsLogo from '../../../assets/images/worksitelabs.png';
import khealthLogo from '../../../assets/images/khealth.png';
import unitedLogo from '../../../assets/images/united.png';
import rockwellLogo from '../../../assets/images/rockwell.png';
import hboLogo from '../../../assets/images/hbo.png';
import latamLogo from '../../../assets/images/latam.png'
import coopeuchLogo from '../../../assets/images/coopeuch.jpg';
import cutsmodeImage from '../../../assets/images/cutsmode.png';
import plantsssLogo from '../../../assets/images/plantsss.png';
import santanderLogo from '../../../assets/images/santander.png';
import ibexLogo from '../../../assets/images/ibex.jpg';

const Projects = () => (
  <section className='Projects'>
    <h3> Projects </h3>
    <div className='Projects-cards'>
      <Project
          title='Worksitelabs / BairesDev'
          legend='I have worked on the main appointment App for w Worksitelabs. We created a new and better version of this App to reserve hours of medical samples.  I led the team to create this React App. I managed the dev team, the QA team, and the DevOps team to create a perfect application using functional components, hooks, and the implementation of "xState" a very good library to manage the different states of the app.  I created the GitHub actions for continuous integration and I support the QA team to create the Cypress end-to-end testing project.  I advised the client I to create and integrate a good architecture model for the project (FrontEnd, BackEnd, Hosting, and DB).  The main technologies used: React, xState, React Router Dom, MUI, StyledComponents, GitHub Actions, Cypress, NodeJS.'
          image={worksitelabsLogo}
      />
      <Project
          title='K Health / BairesDev'
          legend='I have worked on the main App Mobile for Android and iOS. This app generates medical diagnostics based on AI. I worked on adding new features like Geolocation to select Drugstores and go to get drugs, registration, and payment process to chat with a Doctor, Fixing bugs, and more.  In the last stage, we started to create a website with a new flow to migrate a part of the app to the browser.  The main technologies used: React Native, React, Hooks, Python, MongoDB, and StyledComponents.'
          image={khealthLogo}
      />
      <Project
          title='United Airlines/ Globant'
          legend='I have worked on the cart shopping App. I worked on maintaining, fixing bugs, and adding new features for the process of selecting seats, reservations, and initiating payment.  The main technologies I have used were: React, Redux, CSS, Hooks, a11y, and i18n (languages).'
          image={unitedLogo}
      />
      <Project
          title='Rockwell Automation / Globant'
          legend='I have worked on IDE based on JS and powered by Electron. Techs: Javascript, Kotlin.'
          image={rockwellLogo}
      />
      <Project
        title='HBO / Globant'
        legend='I have worked on a big project for HBO. The company has an internal system to administrate the assets for the rest of the platforms where HBO services are present. The main technologies are: AngularJS, Angular2+, Bootstrap, Sass and Karma.'
        image={hboLogo}
      />
      <Project
        title='Latam Airlines / Globant'
        legend='I have worked in a compensation system for LATAM airlines, which allows customers to get compensations directly to their bank accounts. This involve interface with some internals Back End systems to do electronics transfers and also a Front End interface for the end users. The Back End is implemented in Node JS / Express And the Front End is ReactJS / Redux.'
        image={latamLogo}
      />
      <Project
        title='Coopeuch'
        legend='I have worked on three major systems: Online system to enroll people to the cooperative Coopeuch. Online system for deliverying saving account to people. Social media landing pages. The main technologies I have used were: VueJS / Vuex, React JS / Redux, GraphQL / Apollo, Node JS / Express.'
        image={coopeuchLogo}
      />
      <Project
        title='CutsMode'
        legend='I have designed and fully implemented an app called cutsmode. This app is used by Djs as a complement during their presentations. This app was developed on Ionic framework for iOS and Android.'
        image={cutsmodeImage}
      />
      <Project
        title='Santander Chile'
        legend='I have worked in two projects, the first one was upgrading the bank client mobile app to the new android platform, this involve restructuring the source code and also upgrading the api and removing deprecated code. Everything was migrated to last Android platform and Java 8 version. The second project was implementing a new solution whose purpose was to provide a channel for incorporating and on boarding new bank customers. This was a web based application, which was implemented using JavaScript language and AngularJS framework.'
        image={santanderLogo}
      />
      <Project
        title='Plantsss'
        legend='I have implemented a mobile app called plantsss which is about locating plants on my neighborhood. This app was implemented as a native ios app using Swift programming language and MySQL as the database also the server side components were deployed on Amazon AWS and created on PHP.'
        image={plantsssLogo}
      />
      <Project
        title='Ibex'
        legend='In Ibex I worked as a full stack developer. I was in charge of maintaining and updating a wordpress based website, also I have developed a native mobile apps using Swift and Objective-C languages.'
        image={ibexLogo}
      />
    </div>
  </section>
);

export default Projects;
