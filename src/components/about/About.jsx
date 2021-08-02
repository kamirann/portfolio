import React, { useRef, useEffect } from "react";
import {
  FlexItems,
  Image,
  Content,
  HeaderSml,
  Paragraph,
} from "./AboutStyles.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const AboutStyles = () => {
  let ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 1,
      y: "20px",
      x: "20px",
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "play none none none",
      },
    });
    gsap.to("h3,h2", {
      duration: 2,
      delay: 0.5,
      rotateX: 0,
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="container">
      <FlexItems>
        <Image>
          <div
            ref={ref}
            style={{
              position: "absolute",
              border: "10px solid #e4a86d",
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          ></div>
        </Image>
        <Content>
          <HeaderSml>About Me</HeaderSml>
          <Paragraph>
            Hello! My name is Amir and i enjoy programming. i'm a self taugth
            frontend developer who enjoy's solving problems. i start learning
            web development in 2020 and ever since i've learnt HTML / Css /
            Javascript / React / Redux / Nodejs / Mongodb and Wordpress. i'm a
            good team player and i also have good eye for detailes, if you are
            intrested you can see some of my works below.
          </Paragraph>
        </Content>
      </FlexItems>
    </div>
  );
};

export default AboutStyles;
