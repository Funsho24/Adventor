import React from "react";
import logo from "../assets/Adventor 1.png";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <nav>
        <div className="logo">
          <img src={logo} alt="adventor" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Adventures</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button className="navbtn">Explore</button>
            </li>
          </ul>
        </div>
      </nav>
      <section className="inner">
        <div>
          <h2>Discover</h2>
          <h1>The Adventure Travel</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet eu at
            viverra cursus euismod est nec at. Sociis id non ac duis mauris
            luctus id arcu. Turpis non felis, vitae egestas at condimentum.
            Nulla iaculis amet, vehicula viverra ac vulputate nec rhoncus.
                  </p>
                  <button className="viewbtn">View Adventures</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
