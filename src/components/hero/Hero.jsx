import React, { useEffect } from "react";
import "./HeroStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".div2", {
      duration: 0,
      x: "0",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".h1", {
      duration: 0,
      x: "0",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".h2", {
      duration: 0,
      x: "0",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div
      style={{ width: "100%", height: "100vh", position: "relative" }}
      className="container"
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
          className="h1"
          style={{
            fontSize: "200px",
            color: "black",
            transform: "translateX(60vw)",
          }}
        >
          salam
        </h1>
      </div>
      <div
        className="div2"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          transform: "translateX(-200%)",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <h1
          className="h2"
          style={{
            fontSize: "200px",
            color: "white",
            transform: "translateX(100vw)",
          }}
        >
          salam
        </h1>
      </div>
    </div>
  );
};

export default Hero;
