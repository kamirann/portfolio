import styled from "styled-components";
import img from "./img/me.jpg";

export const FlexItems = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  align-items: center;

  justify-content: space-between;
  height: 500px;
  width: 100%;
  margin: 3rem auto;
`;
export const Image = styled.div`
  background: url(${img}) no-repeat center center/cover;
  height: 100%;
  width: 70%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 70%;
`;
export const HeaderSml = styled.h3`
  font-size: 24px;
  color: #e4a86d;
  margin-bottom: 20px;
  line-height: 1.7;
  transform: rotateX(90deg);
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: 000;
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  line-height: 1.7;
`;
