import React, { Component } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Rocketry from './components/Rocketry';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PodcastSection from './components/PodcastSection';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <PodcastSection resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Rocketry resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
