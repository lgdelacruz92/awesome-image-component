import React from "react";
import "./App.css";
import Container from "./components/container";
import AWImage from "./components/aw-image";

function App() {
  const data = {
    x: 50,
    y: 50,
    w: 100,
    h: 100,
    src: "https://source.unsplash.com/random/400x400",
    alt: "random"
  };
  return (
    <div className="App">
      <Container>
        <AWImage image={data} />
      </Container>
    </div>
  );
}

export default App;
