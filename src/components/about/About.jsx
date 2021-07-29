import React, { useRef, useEffect } from "react";
import {
  FlexItems,
  Image,
  Content,
  HeaderSml,
  HeaderMed,
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
          <HeaderMed>How We Became Contabile</HeaderMed>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            recusandae ducimus cupiditate temporibus ipsa autem corrupti
            doloribus saepe quibusdam, aliquam illum quaerat officia architecto
            repellat esse eum consectetur repellendus culpa? Voluptatum a
            nostrum asperiores expedita nisi perferendis facilis, quis
            doloribus, veritatis cumque unde recusandae minima corporis? Cumque
            labore mollitia dolore?
          </Paragraph>
        </Content>
      </FlexItems>
    </div>
  );
};

export default AboutStyles;
