import React from "react";
import "./about.css";

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
      <div className="about-info">
        <p>
          Hello, I am
          <br /> <span>Isabella Henriques.</span>
          <br /> I'm looking for something new, more challenging, changing my
          career to Software Engineering was not easy, but definitely pleasant.
          I love staying alone with my computer just envisioning, creating my
          mini-projects, fixing the bugs I have created, and thinking about ways
          of helping people through technology.
        </p>
      </div>
      <div className="about-bottom">
        <div className="contact"></div>
      </div>
    </div>
  );
}

export default about;
