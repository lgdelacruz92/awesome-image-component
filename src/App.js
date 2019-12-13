import React from "react";
import "./App.css";
import Container from "./components/container";
import AWImage from "./components/aw-image";

function App() {
  return (
    <div className="App">
      <Container>
        <AWImage
          src="https://source.unsplash.com/random/400x400"
          alt="alternative"
        />
      </Container>
    </div>
  );
}

export default App;
