import React, { Component } from 'react';

export default class PodcastSection extends Component {
  render() {
    const podcastSectionEnabled = this.props.resumeData.podcastSectionEnabled;
    return podcastSectionEnabled ? (
      <section id="about">
         <div className="row">
          <div className="header-col">
              <h1><span style={{
                color: '#fff',
                borderBottom: '3px solid #11ABB0',
                fontSize: 20,
                paddingBottom: 6,
              }}>Podcast Each Monday Starting Jun 8th</span></h1>
          </div>
          <a href="https://uncomment.dev/" target="_blank">
            <img src="images/uncomment_dev.png" />
          </a>
         </div>
      </section>
    ) : null;
  }
}
