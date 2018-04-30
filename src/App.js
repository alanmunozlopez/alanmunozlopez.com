import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Hello from './Hello';
import Description from './Description';
import Projects from './Projects';

class App extends Component {

  selectDisplayContent(content) {
    console.log('holi');
  }

  render() {
    return (
      <div className="App">
        {/* <Header
          selectDisplayContent={this.selectDisplayContent}
        /> */}
        <Hello />
        <Description />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
