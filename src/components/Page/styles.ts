import styled from "styled-components";

import honda from "../../assets/honda.jpg";
import velar from "../../assets/velar.jpg";
import bmw2 from "../../assets/bmw2.jpg";
import car from "../../assets/car.jpg";
import mustang from "../../assets/mustang.jpg";
import gtr from "../../assets/gtr.jpg";
import idk from "../../assets/idk.jpg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${honda});
    background-size: cover;
  }
  .colored:nth-child(2) {
    background-image: url(${velar});
    background-size: cover;
  }
  .colored:nth-child(3) {
    background-image: url(${bmw2});
    background-size: cover;
  }
  .colored:nth-child(4) {
    background-image: url(${mustang});
    background-size: cover;
  }
  .colored:nth-child(5) {
    background-image: url(${idk});
    background-size: cover;
  }
  .colored:nth-child(6) {
    background-image: url(${car});
    background-size: cover;
  }
  .colored:nth-child(7) {
    background-image: url(${gtr});
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
`
