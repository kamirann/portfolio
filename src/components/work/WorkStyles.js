import styled from "styled-components";

export const FlexItems = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f3f3f7;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const SectionHeading = styled.h1`
  font-size: 34px;
  color: #000;
  font-family: "Playfair Display", serif;
  margin: 30px 0;
`;
export const SectionSubHeading = styled.h3`
  font-size: 28px;
  color: #ccc;
  font-family: "Playfair Display", serif;
  margin-bottom: 5rem;
`;
// work Item styles

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ even }) => (even ? "row" : "row-reverse")};
  align-items: center;
  justify-content: center;
  margin-bottom: 7rem;
  height: 100%;
  transform: translateX(${({ even }) => (even ? "150px" : "-150px")});
`;
export const Image = styled.div`
  background-image: url(${({ background }) => background});
  height: 400px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 270px;

  border-radius: 50px;
  z-index: 2;
  padding: 2rem;
  transform: translateX(${({ even }) => (even ? "50px" : "-50px")});

  background-image: linear-gradient(
    ${({ even }) =>
      even
        ? `90deg,
    hsla(0, 0%, 100%, 0.11) 37%,
    #fff 68%,
    #fff`
        : ` 270deg,
    hsla(0, 0%, 100%, 0.11) 37%,
    #fff 68%,
    #fff`}
  );
`;
export const ContentH = styled.h2`
  font-size: 24px;
  align-self: ${({ even }) => (even ? "flex-end" : "flex-start")};
  color: #0057ff;
  margin-bottom: 10px;
`;
export const ContentP = styled.p`
  font-size: 18px;
  color: #aaa;
  margin-bottom: 10px;
  text-align: start;
  width: 80%;
`;
export const ContentLink = styled.a`
  position: relative;
  text-decoration: none;
  align-self: ${({ even }) => (even ? "flex-end" : "flex-start")};
  color: #000;
  margin-bottom: 10px;

  &::after {
    position: absolute;
    content: "";
    top: 120%;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #000;
  }
`;
