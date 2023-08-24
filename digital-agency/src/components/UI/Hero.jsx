import React from "react";
import "../styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";
import lightImg from "../../images/light-hero-bg.jpg"
const Hero = ({theme}) => {
  return (
    <section id="home" className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Once enabled, you can start using Emmet's shorthand syntax to
              generate HTML and CSS code more efficiently.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
          <div className="hero__img">
            <img src={theme === "light-theme" ? lightImg : heroDarkImg} alt="heroDarkImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
