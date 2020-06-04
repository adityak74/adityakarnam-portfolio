import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="header-col">
            <h1><span style={{
              color: '#000',
              borderBottom: '3px solid #11ABB0',
              fontSize: 20,
              paddingBottom: 6,
            }}>Works</span></h1>
        </div>
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <a href={item.url} target="_blank">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                  </a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}