import React, { useEffect, useRef } from "react";
import "./HeroStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const Hero = () => {
  let containerRef = useRef(null);
  let div2Ref = useRef(null);
  let firstH1Ref = useRef(null);
  let secondH1Ref = useRef(null);
  let firstH2Ref = useRef(null);
  let secondH2Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to([div2Ref.current, firstH1Ref.current, secondH1Ref.current], {
      x: "0",
      duration: "5",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
    gsap.to([firstH2Ref.current, secondH2Ref.current], {
      x: "0",
      opacity: "1",
      duration: "5",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      ref={containerRef}
    >
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          fontSize: "200px",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <h1
          ref={firstH1Ref}
          style={{
            fontSize: "200px",
            color: "black",
            transform: "translateX(65%)",
          }}
        >
          Hello
        </h1>
        <h1
          ref={secondH1Ref}
          style={{
            fontSize: "200px",
            color: "black",
            transform: "translateX(45%)",
          }}
        >
          I'm Anny
        </h1>
      </div>
      <div
        ref={div2Ref}
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          transform: "translateX(-101%)",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <h1
          ref={firstH2Ref}
          style={{
            fontSize: "200px",
            color: "white",
            transform: "translateX(166%)",
            opacity: "0",
          }}
        >
          Hello
        </h1>
        <h1
          ref={secondH2Ref}
          style={{
            fontSize: "200px",
            color: "white",
            transform: "translateX(146%)",
            opacity: "0",
          }}
        >
          I'm Anny
        </h1>
      </div>
    </div>
  );
};

export default Hero;
