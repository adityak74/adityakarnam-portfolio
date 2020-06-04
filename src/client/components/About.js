import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>

            <div className="nine columns main-col">
               <h2>Who am I?</h2>
               <p>
               {resumeData.aboutme}
               {resumeData.roleDescription}
               </p>
               <div className="row">
                  <div className="columns contact-details">
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}