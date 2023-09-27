import React from "react";
import img2 from '../assets/images/img2.svg'

const About = () => {
  return (
      <section className="container about">
        <div className="aboutRow">
            <div className="aboutImage rowLeft">
              <img className="img-fluid" src={img2} alt="" srcset="" />
            </div>
            <div className="aboutText rowRight">
              <h2>
                Welcome to <span>Dwidasa Samara Indonesia (DSI)</span>
              </h2>
              <p>
                Dwidasa Samara Indonesia (DSI) was first established in 2010 by
                he founders, who each of them has a common end objective to
                innovate new creations by making the most of the ever-growing
                Information technology through <span>DSI</span>'s distinct
                front-end based application concept.
              </p>

              <p >
                Managed by a team of professional experts with extensive
                experience and impressive track records,
                <span>DSI</span> believes that continuous improvements and
                innovations assure your business to run effectively and
                efficiently.
              </p>
          </div>
        </div>
      </section>
  );
};

export default About;
