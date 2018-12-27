import React, { Component } from 'react';

import Hello from '../sections/Hello';
import Description from '../sections/Description';
import Projects from '../sections/Projects';
import Footer from '../sections/Footer';

class Home extends Component {

  selectDisplayContent(content) {
    console.log('holi');
  }

  render() {
    return (
      <div className="App">
        <Hello />
        <Description />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Home;
