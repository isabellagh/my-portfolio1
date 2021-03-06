import React from "react";
import "./about.scss";
import Contact from "./contact";

function about() {
  return (
    <div className="about">
      <div className="about-top">
        <img
          src={require("../../../assets/profile.png").default}
          className="profile-picture"
          alt=""
        />
      </div>
      <br />
      <div className="about-info">
        <p>
          Hello, World!
          <br /> <span>I am Isabella Henriques, recently graduated as Software Engineer.</span>
          <br /> I'm looking for something new, more challenging, changing my
          career to Software Engineering was not easy, but definitely pleasant.
          I love staying alone with my computer just envisioning, creating my
          mini-projects, fixing the bugs I have created, and thinking about ways
          of helping people through technology.
        </p>
      </div>
      <div className="about-bottom">
      <br />
        <h5>Education</h5>
        <ul>
          <li>Software Engineering</li>
          <p>Flatiron School</p>
          <li>Bachelor in Physical Education</li>
          <p>Veiga de Almeida University</p>
        </ul>
        <br />
      </div>
      <di>
        <Contact />
      </di>
    </div>
  );
}

export default about;
