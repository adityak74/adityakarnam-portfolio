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
                <Typing loop={true} speed={100}>
                  <span>ISRO: Performance normal. Decoding message...../%@%/</span>
                  <br />
                  <span>ISRO: Connecting to akarnam37@gmail.com</span>
                  <Typing.Backspace count={100} />
                </Typing>
              </div>
            </aside>
          </center>
        </div>
      </section>
    );
  }
}