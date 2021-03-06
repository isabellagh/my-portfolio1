import React from "react";
import "./home.css";
import Navbar from "../header/navbar";
import Body from "../body/body";
import Footer from "../footer/footer";

function Home() {
  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
