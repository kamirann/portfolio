import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: "0.5rem",
          alignItems: "center",
          position: "fixed",
          right: "30px",
          bottom: "20px",
        }}
      >
        <i className="fab fa-linkedin fa-3x"></i>
        <i className="fab fa-github fa-3x"></i>
      </div>
    </div>
  );
};

export default SocialMedia;
