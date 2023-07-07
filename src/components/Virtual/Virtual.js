import React from "react";
import css from "./Virtual.module.css";
import ReactCompareImage from "react-compare-image";
import After from "../../assets/우리강릉웃긴표정2.jpg";
import Before from "../../assets/우리강릉웃긴표정1.jpg";
import 넌이인생네컷4 from "../../assets/넌이인생네컷(4).png";
import 부산바다 from "../../assets/부산바다.jpg";
import 광주벚꽃 from "../../assets/광주벚꽃.png";
import { Fade, Slide } from "react-awesome-reveal";

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      {/*left side*/}
      <div className={css.left}>
        <Slide>I love you so much!</Slide>
      </div>
      {/*middle side*/}
      <div className={css.middle}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
        <img src={광주벚꽃} alt="" />
      </div>
      {/* right section */}
      <div className={css.left}>
        <div className={css.traffic}>
          <Slide>want to spend</Slide>
          <Slide> a lifetime with you</Slide>
        </div>

        <div className={css.customers}>
          <Fade delay={1e3} cascade damping={1e-1}>
            Made by Woogi
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
