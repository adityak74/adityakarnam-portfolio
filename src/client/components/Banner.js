import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class About extends Component {
  render() {
    const bannerData = this.props.resumeData.bannerData;
    const bannerDataHtml = bannerData.enabled ? (<section id="banner">
        <div className="row">
        <Typing speed={100}>
          <span>
            <b>{bannerData.text}:</b>
            &nbsp;
            <a href={bannerData.url} target='_blank'>here</a>
          </span>
        </Typing>
        </div>
    </section>) : null;
    return bannerDataHtml;
  }
}