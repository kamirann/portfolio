import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const SocialMedia = () => {
  let containerRef = useRef(null);
  let wrapperRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(wrapperRef.current, {
      right: "50%",
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
      ref={containerRef}
      style={{
        position: "fixed",
        right: "30px",
        bottom: "10px",
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: "0.5rem",
          alignItems: "center",
          position: "fixed",
          right: "30px",
          bottom: "10px",
        }}
      >
        <i className="fab fa-linkedin fa-3x"></i>
        <i className="fab fa-github fa-3x"></i>
      </div>
    </div>
  );
};

export default SocialMedia;
