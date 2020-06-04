import Typing from 'react-typing-animation';
import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact" style={{ background: 'black' }}>
        <div className="row" style={{ background: 'black' }}>
          <center>
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <img src="images/aryabhatta.png" style={{
                  margin: '0 auto',
                  alignContent: 'center',
                  width: '45%',
                }} />
                <Typing speed={50}>
                  <span>ISRO: Performance normal. Sending message...../%@%/</span>
                  <br />
                  <span>Adi: Decoding Message. Pushing commits to git@adityak74</span>
                </Typing>
                <br /><br />
                <div style={{ backgroundColor: 'white' }}>
                  <div className="calendar" />
                </div>
              </div>
            </aside>
          </center>
        </div>
      </section>
    );
  }
}