import React from "react";
import Container from "components/container";
import AWImage from "components/aw-image";
import { image1 } from "data/image1";
export default { title: "AwesomeImage" };

export const awesomeImage = () => (
  <Container>
    <AWImage image={image1} />
  </Container>
);
