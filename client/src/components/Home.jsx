import React from "react";
import { Link } from "react-router-dom";
import imghome from "../img/imghome.png";

const Home = () => {
  return (
    <section className="home">
      <div className="container home-wrapper">
        <div className="home-circle">
          <div className="home-shape"></div>
          <img
            src={imghome}
            className="img-rotation home-img"
            alt="Home Images"
          />
        </div>
        <div className="home-content">
          <p className="home-description">NEW IN</p>
          <h1 className="home-title">YEEZY boost sply-350</h1>
          <p className="home-description">
            Explore the new collections of sneaker
          </p>
          <Link to="/products">
            <button className="btn home-btn">Explore Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
