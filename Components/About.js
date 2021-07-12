import React from "react";
import Particles from 'react-particles-js';
import './grid.css'
import TypeWriter from "react-typewriter";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  

  return (
    <section id="about">
      <div className="row">
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />
        <div className="nine columns main-col">
          <div>
          <TypeWriter className="courier-header about-text" typing={0.5}>Skills</TypeWriter>
            <p><strong>{bio}</strong></p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{email}</span>
                </p>
                <img className="profilepic" src='https://res.cloudinary.com/codegowdacloud/image/upload/v1625122359/Screenshot_2021-05-29_at_11.42.05_PM_fydkas.png' ></img>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
