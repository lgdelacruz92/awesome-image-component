import React from "react";
import "./App.css";
import Container from "./components/container";
import AWImage from "./components/aw-image";
import { image1 } from "./data/image1";

function App() {
  return (
    <div className="App">
      <Container>
        <AWImage image={image1} />
      </Container>
    </div>
  );
}

export default App;
