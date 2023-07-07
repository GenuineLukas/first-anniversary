import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/우리윙크.png";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { Fade, Slide } from "react-awesome-reveal";
import { Route, Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Congratulations on your 1st anniversary!!")
              .pauseFor(1000)
              .start();
          }}
        />

        <div className={css.text2}>
          <Slide>celebrating website</Slide>
          <Fade delay={1e3} cascade damping={1e-1}>
            just for you
          </Fade>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <div className={css.signup}>
            <Link to="/slider">
              <span>celebrating words from people</span>
            </Link>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className={css.h_sides}>
        <Fade cascade damping={1.5}>
          <div className={css.traffic}>
            <span>365days</span>
            <span>with woogi♡</span>
          </div>

          <div className={css.customers}>
            <span>TYSM</span>
            <span>for staying with me♡</span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
