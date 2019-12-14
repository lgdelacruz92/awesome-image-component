import React from "react";
import Container from "components/container";
import AWImage from "components/aw-image";
export default { title: "AwesomeImage" };

const data = {
  x: 50,
  y: 50,
  w: 100,
  h: 100,
  src: "https://source.unsplash.com/random/400x400",
  alt: "random"
};

export const awesomeImage = () => (
  <Container>
    <AWImage image={data} />
  </Container>
);
